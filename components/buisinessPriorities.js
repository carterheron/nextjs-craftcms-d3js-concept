import Head from '../components/head';
import { generatePrioritiesChart } from './d3BusinessPrioritiesChart';
import React, { useEffect } from 'react';

export default function BaseLayout(props) {
    const data = props.page.entry;
    const headline = data.headline ? data.headline : 'Headline Default';
    const chartData = data.businessesPriorities;

    useEffect(() => {
        generatePrioritiesChart(chartData);
      }, []);

    return (
        <div>
            {Head(props)}
            <main className="background-yellow-gradient h-[200vh]">
                <section className="p-8 md:p-16 lg:p-24">
                    <div className="border-2 border-[#03363D]">
                        <div className="bg-[#F9E9B1] p-6 md:p-8 lg:p-10 text-center border-b-2 border-[#03363D]">
                            <h4 className="text-[#03363D] text-xl md:text-2xl lg:text-3xl font-bold">{headline}</h4>
                        </div>
                        <div className="bg-[#FEF8DC] p-6 md:p-8 lg:p-10">
                            <svg id="businessPriorities" className="h-full w-full">

                            </svg>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
