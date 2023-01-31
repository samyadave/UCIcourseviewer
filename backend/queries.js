import { gql } from '@apollo/client'

export const GET_COURSE = gql`
  query GetCourse {
    result: course(id: "IN4MATX113") {
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
