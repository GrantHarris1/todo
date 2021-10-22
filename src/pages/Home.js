import React from 'react'
import InfoCard from '../components/InfoCard'
import Title from '../components/Title';

export default function Home() {
    let version = "1.2.3";
    return (
        <>
            <Title />
            <InfoCard data={version} />
        </>
    )
}
