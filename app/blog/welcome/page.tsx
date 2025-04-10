import React from 'react'
import Welcome from './welcome.mdx'
import { BackgroundImage } from '../../../components/BackgroundImage';

export default function Page() {
    return (
        <React.Fragment>
            <article className='post'>
                <Welcome />
            </article>
            <div className='image'>
                <BackgroundImage url='https://pbs.twimg.com/media/GoDAvEiW4AAOWyk?format=jpg&name=large' />
            </div>
        </React.Fragment>
    )
}