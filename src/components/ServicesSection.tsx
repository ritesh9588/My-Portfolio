import { BriefcaseIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "School",
      company: "Nutan Vidyalaya Malkapur",
      duration: "2008-2019",
      description:
        "Schooling from Nutan Vidyalaya Malkapur gave me various learning and personality developing experiences. All the basics I know, I've learnt it from NVM, Malkapur.This was one of the most basic step for starting my career ",
    },
    {
      title: "Junior College",
      company: "Ordinance Factory, Varangaon",
      duration: "2020-2022",
      description:
        "At Ordinance Factory, Varangaon I took my first step into the field of sciences. Here I learnt various new things about science and prepared for MHTCET examination",
    },
    {
      title: "College",
      company: "R. C. Patel Institue of Technology, Shirpur ",
      duration: "2023-Till Now",
      description:
        "Diving into computer sciences in R. C. Patel Institute of Technology teaches me everyday something new about the computer, its functionalities and about coding languages.",
    },
  ]

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-800 dark:text-white">Education</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-500 dark:bg-emerald-400 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-emerald-300 dark:border-emerald-700 ml-3">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute w-6 h-6 bg-emerald-500 dark:bg-emerald-600 rounded-full -left-3 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                  <BriefcaseIcon className="h-3 w-3 text-white" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{exp.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 sm:ml-2">at {exp.company}</span>
                </div>
                <time className="block mb-2 text-sm font-normal leading-none text-emerald-600 dark:text-emerald-400">
                  {exp.duration}
                </time>
                <p className="text-slate-700 dark:text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}