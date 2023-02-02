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
  query Schedule {
    result: schedule(year: 2023, quarter: "Winter", department: "IN4MATX") {
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
