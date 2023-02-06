import { gql } from '@apollo/client'

export const GET_COURSE = gql`
  query GetCourse {
    result: course(id: "IN4MATX113") {
      id
      title
      prerequisite_for {
        id
        title
      }
      prerequisite_list {
        id
        title
      }
      prerequisite_text
      course_level
      department_alias
      terms
      ge_text
      overlap
      corequisite
      same_as
      repeatability
      units
    }
  }
`

export const SCHEDULE = gql`
  query Schedule(
    $year: Float = 2023
    $quarter: String = "Winter"
    $department: String
  ) {
    result: schedule(year: $year, quarter: $quarter, department: $department) {
      instructors {
        name
      }
      course {
        id
        title
        prerequisite_list {
          id
          title
        }
      }
      section {
        type
        code
        comment
        number
      }
      meetings {
        days
        time
        building
      }
      units
    }
  }
`

export const DEPTS = gql`
  query AllCourses {
    result: allCourses {
      department_name
      department
    }
  }
`
