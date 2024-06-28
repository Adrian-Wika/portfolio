'use client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { useRouter } from 'next/navigation'

export function VercelDataCollector() {
    const router = useRouter()

    return <div>
        <Analytics mode={'production'} />
        <SpeedInsights route={router.pathname} />
    </div>
}
