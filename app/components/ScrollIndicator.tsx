// ScrollIndicator.tsx\
"use client"
import { useEffect, useState, useRef } from 'react'

type Section = {
  id: string
  name: string
}

export function ScrollIndicator({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.1
    })

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.current?.observe(el)
    })

    return () => observer.current?.disconnect()
  }, [sections])

  return (
    <div className="flex flex-col items-start justify-center w-full space-y-10">
      {sections.map((section) => (
        <div key={section.id} className="flex items-center justify-center">
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === section.id ? 'bg-green-100' : 'bg-gray-400'
            }`}
          ></div>
          {active === section.id && (
            <span className="text-sm text-green-100 ml-2">{section.name}</span>
          )}
        </div>
      ))}
    </div>
  )
}
