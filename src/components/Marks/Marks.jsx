import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Marks = () => {
    document.title="Assignment Chart"

    const data = [
        {
            assignmentNumber: 'Assignment 01',
            marks: 48
        },
        {
            assignmentNumber: 'Assignment 02',
            marks: 57
        },
        {
            assignmentNumber: 'Assignment 03',
            marks: 15
        },
        {
            assignmentNumber: 'Assignment 04',
            marks: 30
        },
        {
            assignmentNumber: 'Assignment 05',
            marks: 29
        },
    ]
    
    return (
        <div className='w-full h-screen'>
            <ResponsiveContainer className="w-full h-full" >
                <RadarChart cx="50%" cy="40%" outerRadius="60%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="assignmentNumber" />
                    <PolarRadiusAxis />
                    <Radar name="Assignment Marks" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Marks;