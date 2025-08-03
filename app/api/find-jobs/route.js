// FILE: pages/api/find-jobs.js (or app/api/find-jobs/route.js for Next.js 13+)

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { resumeText } = await request.json();

    if (!resumeText) {
      return NextResponse.json(
        { error: 'Resume text is required' },
        { status: 400 }
      );
    }

    // Extract skills from resume
    const skills = extractSkillsFromResume(resumeText);
    const query = skills.slice(0, 3).join(' OR '); // Use top 3 skills for search

    // Search jobs using JSearch API
    const jobs = await searchJobsWithJSearch(query);

    return NextResponse.json({
      jobs: jobs.slice(0, 10), // Limit to 10 jobs
      totalFound: jobs.length,
      searchKeywords: skills.slice(0, 3)
    });

  } catch (error) {
    console.error('Error finding jobs:', error);
    return NextResponse.json(
      { error: 'Failed to find jobs. Please try again.' },
      { status: 500 }
    );
  }
}

// Extract skills from resume text
function extractSkillsFromResume(resumeText) {
  const commonSkills = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'AWS', 'Docker',
    'Git', 'HTML', 'CSS', 'TypeScript', 'MongoDB', 'Express', 'Angular', 'Vue',
    'PHP', 'C++', 'C#', 'Ruby', 'Go', 'Kubernetes', 'Jenkins', 'GraphQL',
    'REST API', 'MySQL', 'PostgreSQL', 'Machine Learning', 'Data Analysis'
  ];

  const foundSkills = commonSkills.filter(skill => 
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  return foundSkills.length > 0 ? foundSkills : ['Software Developer'];
}

// JSearch API integration
async function searchJobsWithJSearch(query) {
  try {
    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&num_pages=1&date_posted=week`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`JSearch API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.status === 'OK' && data.data) {
      return data.data.map(job => ({
        id: job.job_id,
        title: job.job_title,
        company: job.employer_name,
        location: job.job_city ? `${job.job_city}, ${job.job_state || job.job_country}` : 'Remote',
        description: job.job_description?.substring(0, 200) + '...',
        url: job.job_apply_link,
        salary: job.job_min_salary ? `$${job.job_min_salary.toLocaleString()} - $${job.job_max_salary?.toLocaleString() || 'N/A'}` : null,
        employmentType: job.job_employment_type,
        postedDate: job.job_posted_at_datetime_utc
      }));
    }

    return [];
  } catch (error) {
    console.error('JSearch API error:', error);
    return [];
  }
}



