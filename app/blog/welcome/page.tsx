import React from 'react'
import Welcome from './welcome.mdx'
import { BackgroundImage } from '../../../components/BackgroundImage';

export default function Page() {
    return (
        <main className='main'>
            <article className='post'>
                <Welcome />
            </article>
            <div className='image'>
                <BackgroundImage url='https://pbs.twimg.com/media/GoDAvEiW4AAOWyk?format=jpg&name=large' />
            </div>
        </main>
    )
}