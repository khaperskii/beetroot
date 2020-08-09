import React from 'react'

import ContentWidthLimiter from '..//..//..//components/ContentWidthLimiter'
import Title from '..//Title'
import { TabsPage } from './Tabs'

import './styles.scss'

export default function WorksSection() {
    return (
        <section className='works'>
            <ContentWidthLimiter>
                <div className='works__content-container' id='works'>
                    <Title title='Latest Works'/>
                    <TabsPage />
                </div>
            </ContentWidthLimiter>
        </section>
    )
}