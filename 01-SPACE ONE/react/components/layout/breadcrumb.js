import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/breadcrumb.module.css'
import { BiChevronRight } from 'react-icons/bi'

export default function Breadcrumb() {
  const [path, setPath] = useState('')

  const breadcrumbNameMap = [
    //  [path, breadcrumbName]
    { id: 1, path: '/', title: '首頁' },
    { id: 15, path: '/member', title: '會員中心' },
    { id: 4, path: '/exhibition', title: '展覽' },
    { id: 5, path: '/exhibition/cf', title: '募資' },
    { id: 12, path: '/login', title: '登入會員' },
    { id: 13, path: '/register', title: '註冊會員' },
    { id: 15, path: '/member/profile', title: '個人資料' },
  ]

  useEffect(() => {
    setPath(location.pathname)
  })

  return (
    <div className={styles.container}>
      {breadcrumbNameMap.map((v, i) => {
        return (
          <>
            {(path != '/') & path.includes(v.path) ? (
              <Link key={v.id} href={v.path} className={styles.label}>
                {v.title}
                {path === v.path ? '' : <BiChevronRight size={24} />}
              </Link>
            ) : (
              ''
            )}
          </>
        )
      })}
    </div>
  )
}
