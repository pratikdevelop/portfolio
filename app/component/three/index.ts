'use client'

import dynamic from 'next/dynamic'

export const HeroBackground = dynamic(() => import('./HeroScene'), { ssr: false })
export const Avatar3D = dynamic(() => import('./AvatarScene'), { ssr: false })
export const SectionBackdrop = dynamic(() => import('./SectionScene'), { ssr: false })
