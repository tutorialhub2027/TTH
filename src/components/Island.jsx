import allTuts from '../data/tops.json'
import '../styles/Island.css'
import { BookOpen, Trophy, Dumbbell, Wrench, Shapes } from 'lucide-react'

const subjectIcons = {
    'School Curriculums': BookOpen,
    Olympiads: Trophy,
    Sports: Dumbbell,
    Fixes: Wrench,
    Other: Shapes,
}
function TopLinks({ links, name }) {
    return <>
        {links.slice(0, 4).map((link) => (
            <a key={link} href={`/tutorial?title=${encodeURIComponent(link)}`} className="tt-link">{link}</a>
        ))}

        {links.length > 4 && (
            <a className="all-tt" href={`/tutorial?subject=${encodeURIComponent(name)}`}>All tutorials</a>
        )}
    </>
}

export default function Island({ subject }) {
   const Icon = subjectIcons[subject] ?? Shapes

    return <div className="Island">
        <h2 className="title"><Icon size={22} aria-hidden="true" /> {subject}</h2>
        <TopLinks links={allTuts[subject] ?? []} name={subject} />
    </div>
}