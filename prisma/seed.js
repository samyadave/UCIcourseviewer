const { PrismaClient } = require('@prisma/client')
const { default: axios } = require('axios')

const prisma = new PrismaClient()

const getMaps = async () => {
  const { schoolsMap, deptsMap } = await axios({
    url: 'https://api.peterportal.org/graphql/',
    method: 'post',
    data: {
      query: `query AllCourses {
                  allCourses {
                    department_name
                    department
                    school
                  }
                }`,
    },
  }).then((result) => {
    const schoolsMap = new Map()
    const deptsMap = new Map()
    result.data.data.allCourses.map((e) => {
      if (schoolsMap.has(e.school)) {
        if (!schoolsMap.get(e.school).includes(e.department_name)) {
          schoolsMap.get(e.school).push(e.department_name)
        }
      } else {
        schoolsMap.set(e.school, new Array())
      }
    })
    result.data.data.allCourses.map((course) => {
      deptsMap.set(course.department_name, {
        code: course.department,
        school: course.school,
      })
    })

    return { schoolsMap, deptsMap }
  })

  return { schoolsMap, deptsMap }
}

const seedSchools = async (schoolsMap) => {
  Array.from(schoolsMap.keys()).map(async (school) => {
    await prisma.school.create({
      data: {
        name: school,
      },
    })
  })
}

const seedDepts = async (schoolsMap, deptsMap) => {
  Array.from(schoolsMap.values())
    .flat()
    .map(async (dept) => {
      await prisma.dept.create({
        data: {
          name: dept,
          code: deptsMap.get(dept).code,
          school: { connect: { name: deptsMap.get(dept).school } },
        },
      })
    })
}

const seedCourse = async () => {
  axios({
    url: 'https://api.peterportal.org/graphql/',
    method: 'post',
    data: {
      query: `query{
      allCourses{
        department
        school
        title
        units
        
      }
      }`,
    },
  })
    .catch((e) => console.log(e))
    .then((result) => console.log(result.data.data.allCourses))
}

const main = async () => {
  console.log(`Start seeding ...`)
  const { schoolsMap, deptsMap } = await getMaps()

  // await seedSchools(schoolsMap)
  // await seedDepts(schoolsMap, deptsMap)
  await seedCourse()

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
