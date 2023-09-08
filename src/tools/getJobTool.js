const getAllJobs = async() =>{
    const response = await fetch('/public/jobs.json')
    const allJobs = await response.json()
    
    return allJobs
}

export default getAllJobs