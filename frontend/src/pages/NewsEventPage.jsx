
import { MdEventAvailable } from 'react-icons/md';
import SideBar from '../components/SideBar';

const articles = [
  {
    title: "Health Advances for the 50+ Age Group",
    tag: "News",
    content: `
      Recent studies have shown significant advancements in healthcare for those aged 50 and above. Medical researchers have developed new treatments for chronic conditions such as arthritis, diabetes, and heart disease. With personalized medicine becoming more accessible, people in this age group can expect more targeted therapies that improve their quality of life. Additionally, innovations in wearable health technology are helping individuals monitor their health in real time, allowing for early detection of potential issues.
    `,
  },
  {
    title: "Social Security Updates and What They Mean for You",
    tag: "News",
    content: `
      The Social Security Administration recently announced changes to benefit calculations, which could impact millions of Americans aged 50 and older. The cost-of-living adjustment (COLA) for 2024 is expected to increase by 3%, providing additional financial relief. However, there are also discussions about potential changes to the full retirement age and tax implications for higher-income beneficiaries. It's important for individuals approaching retirement to stay informed and consider how these changes might affect their financial planning.
    `,
  },
  {
    title: "Trends in Senior Housing: What to Expect in the Coming Years",
    tag: "News",
    content: `
      As the demand for senior housing increases, new trends are emerging in the industry. Many communities are now focusing on creating more affordable and adaptable living spaces for people aged 50 and above. These include smaller, energy-efficient homes, as well as multigenerational housing options that allow older adults to live with family members. Additionally, there is a growing emphasis on community engagement and access to amenities such as fitness centers, cultural activities, and healthcare services.
    `,
  },
  {
    title: "Technology Bridging the Generational Gap",
    tag: "News",
    content: `
      With the rapid advancement of technology, many tools and platforms are now being designed specifically with older adults in mind. From simplified smartphones and tablets to online platforms that facilitate social connections, technology is helping to bridge the generational gap. Virtual reality is also being used in therapeutic settings, providing cognitive stimulation and reducing feelings of isolation. As technology continues to evolve, it will play an increasingly important role in the lives of those aged 50 and above.
    `,
  },
  {
    title: "Understanding the Latest Changes in Medicare",
    tag: "News",
    content: `
      Medicare is undergoing several important changes that could affect individuals aged 50 and over. The introduction of new coverage options, adjustments to premiums, and changes in drug pricing are all factors that need to be considered. Additionally, telehealth services have been expanded under Medicare, providing more convenient access to medical care. Understanding these changes is crucial for making informed decisions about healthcare in retirement.
    `,
  },
  {
    title: "Annual 50+ Wellness Fair",
    tag: "Event",
    content: `
      The Annual 50+ Wellness Fair is set to take place this October, offering a variety of health screenings, workshops, and fitness demonstrations specifically tailored to individuals aged 50 and above. Attendees can explore the latest in nutrition, exercise, and mental health, and even receive one-on-one consultations with healthcare professionals. This event is a great opportunity to stay informed about health trends and connect with others in the community.
    `,
  },
  {
    title: "Senior Arts & Crafts Festival",
    tag: "Event",
    content: `
      The Senior Arts & Crafts Festival is an event not to be missed by those with a creative flair. Taking place in November, this festival will showcase the talents of artists aged 50 and over, featuring everything from paintings and sculptures to handmade jewelry and textiles. Attendees can participate in workshops, meet the artists, and even purchase unique pieces to take home. It’s a wonderful opportunity to celebrate creativity and find inspiration.
    `,
  },
  {
    title: "Travel Expo for the 50+ Community",
    tag: "Event",
    content: `
      This year’s Travel Expo is dedicated to the 50+ community, offering exclusive deals and travel packages designed with older adults in mind. The event will include presentations from travel experts on the best destinations for senior travelers, tips for staying healthy on the go, and information about travel insurance options. Whether you’re planning a relaxing beach getaway or an adventurous trip abroad, this expo will provide all the resources you need.
    `,
  },
  {
    title: "Senior Sports & Fitness Day",
    tag: "Event",
    content: `
      The Senior Sports & Fitness Day is an annual event focused on promoting physical activity and well-being among the 50+ age group. The event will feature a range of activities, including yoga sessions, walking tours, and team sports like pickleball and bocce. Participants will have the opportunity to engage in friendly competition, learn new exercises, and meet others who share a passion for staying active. It’s a day full of energy, motivation, and fun.
    `,
  },
  {
    title: "Financial Planning Workshop for 50+",
    tag: "Event",
    content: `
      Financial planning is crucial at any age, but it becomes even more important as retirement approaches. This workshop, tailored for those aged 50 and above, will cover essential topics such as investment strategies, estate planning, and managing retirement income. Expert financial advisors will be on hand to answer questions and provide personalized advice. Whether you’re just starting to think about retirement or are already retired, this workshop will offer valuable insights to help you secure your financial future.
    `,
  },
];

export const NewsEventPage = () => {
  return (
    <div className=' bg-slate-800 flex' >
    <div className=' fixed'>
        <SideBar/>
    </div>
    <div className="p-8 dark:bg-gray-800 dark:text-white pl-72">
      <h1 className="text-3xl font-bold mb-8 flex gap-3">
        <div className='pt-1'>
            <MdEventAvailable/>
        </div>
        News & Events</h1>
      
      {/* Render News Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">News</h2>
        {articles.filter(article => article.tag === 'News').map((article, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>

      {/* Render Events Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
        {articles.filter(article => article.tag === 'Event').map((article, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};


