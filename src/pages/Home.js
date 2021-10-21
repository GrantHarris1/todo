import React from 'react'
import InfoCard from '../components/InfoCard'

export default function Home() {
    let version = "1.2.3";
    return (
        <>
            <InfoCard data={version} />
        </>
    )
}
