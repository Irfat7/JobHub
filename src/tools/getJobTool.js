const getAllJobs = async() =>{
    const response = await fetch('/jobs.json')
    const allJobs = await response.json()
    
    return allJobs
}

export default getAllJobs