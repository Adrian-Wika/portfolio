'use client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useRouter } from 'next/navigation'

export function VercelDataCollector() {
    const router = useRouter()

    return <div>
        <Analytics mode={'production'} beforeSend={(event) => {
            console.log(event)
            if (event.url.includes('/private')) {
                return null
            }
            return event
        }} />
        <SpeedInsights route={router.pathname} />
    </div>
}
