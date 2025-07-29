'use client'

import Image from 'next/image'

export default function StorySection() {
  const storyCards = [
    {
      image: '/Story/Hollow_Land_Project12.png',
      title: 'ป่าลึกลับแห่งเวทมนตร์',
      description: 'ค้นพบป่าใหญ่อันลึกลับแห่ง Hollow Land ที่เต็มไปด้วยสิ่งมีชีวิตวิเศษ พืชเวทมนตร์ และธรรมชาติที่ซ่อนความลับแห่งยุคโบราณรอคอยให้คุณมาค้นหา'
    },
    {
      image: '/Story/3.png',
      title: 'การเชื่อมโยงกับธรรมชาติ',
      description: 'เมื่อแสงสีเขียวแห่งชีวิตส่องลงมายังป่าโบราณ นักผจญภัยใหม่จะค้นพบพลังแห่งธรรมชาติและสร้างสายใยกับป่าใหญ่ในโลกแฟนตาซีอันน่าอัศจรรย์'
    },
    {
      image: '/Story/4.png',
      title: 'ชุมชนผู้พิทักษ์ป่า',
      description: 'เข้าร่วมกับชุมชนผู้พิทักษ์ป่าที่อบอุ่น ทุกคนมีความผูกพันกับธรรมชาติและความสามารถพิเศษเป็นของตัวเอง สร้างมิตรภาพและร่วมกันปกป้องป่าแห่ง Hollow Land'
    }
  ]

  return (
    <section id="story" className="story-section">
      <div className="container">
        <h2 className="section-title hollow-text hollow-glow">ตำนานแห่งป่าโบราณ</h2>
        <p className="section-subtitle">ค้นพบเรื่องราวมหัศจรรย์ในป่าลึกลับแห่งธรรมชาติ</p>
        <div className="story-grid">
          {storyCards.map((card, index) => (
            <div key={index} className="story-card hollow-hover">
              <div className="card-image">
                <Image 
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 