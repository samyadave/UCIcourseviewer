// SORT ALL DEPTS BY SCHOOL

import { DEPTS, SCHOOLS } from '@/backend/queries'
import Dept from '@/components/Dept'
import Loading from '@/components/Loading'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { Container, Row } from 'react-bootstrap'
import PageLayout from '../../components/PageLayout'
import styles from './index.module.scss'

const DeptPage = () => {
  const { data, loading } = useQuery(SCHOOLS)

  const router = useRouter()

  return (
    <PageLayout>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            {data?.result.map((school) => (
              <div>
                <h1 className={styles.school_title}>{school.name}</h1>
                <hr
                  style={{ marginTop: '0', border: `1.5px solid ${'#FFD404'}` }}
                />
                <Row
                  xs={'auto'}
                  md={'auto'}
                  className={`${styles.row_spacing} g-2`}
                >
                  {school.Depts.map((dept) => (
                    <Dept dept={dept} router={router} />
                  ))}
                </Row>
              </div>
            ))}
          </>
        )}
      </Container>
    </PageLayout>
  )
}

export default DeptPage
