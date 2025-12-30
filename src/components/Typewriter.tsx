import React, { useEffect, useState } from 'react';

const words = [
    'Backend Developer',
    'Full-Stack Developer',
    'Open Source Contributor',
    'DevOps Enthusiast',
];

const Typewriter: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === words.length) return;

        if (
            subIndex === words[index].length + 1 &&
            index !== words.length - 1 &&
            !reverse
        ) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) =>
                reverse ? prev - 1 : prev + 1
            );
        }, reverse ? 40 : 120);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-400">
            {`${words[index].substring(0, subIndex)}\u200b`}
            <span className="border-r-2 border-blue-400 animate-pulse ml-1" />
        </span>
    );
};

export default Typewriter;
