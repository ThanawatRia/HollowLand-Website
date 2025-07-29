'use client'

import Image from 'next/image'

export default function StorySection() {
  const storyCards = [
    {
      image: '/Story/Hollow_Land_Project12.png',
      title: 'ป่าลึกลับแห่งเวทมนตร์',
      description: 'ค้นพบป่าใหญ่อันลึกลับแห่ง Hollow Land ที่เต็มไปด้วยสิ่งมีชีวิตวิเศษ พืชเวทมนตร์ และธรรมชาติที่ซ่อนความลับแห่งยุคโบราณรอคอยให้คุณมาค้นหา',
      subtitle: 'The Mystical Forest',
      features: ['ป่าลึกลับ', 'สิ่งมีชีวิตวิเศษ', 'พืชเวทมนตร์']
    },
    {
      image: '/Story/3.png',
      title: 'การเชื่อมโยงกับธรรมชาติ',
      description: 'เมื่อแสงสีเขียวแห่งชีวิตส่องลงมายังป่าโบราณ นักผจญภัยใหม่จะค้นพบพลังแห่งธรรมชาติและสร้างสายใยกับป่าใหญ่ในโลกแฟนตาซีอันน่าอัศจรรย์',
      subtitle: 'Nature\'s Connection',
      features: ['แสงแห่งชีวิต', 'พลังธรรมชาติ', 'สายใยป่าใหญ่']
    },
    {
      image: '/Story/4.png',
      title: 'ชุมชนผู้พิทักษ์ป่า',
      description: 'เข้าร่วมกับชุมชนผู้พิทักษ์ป่าที่อบอุ่น ทุกคนมีความผูกพันกับธรรมชาติและความสามารถพิเศษเป็นของตัวเอง สร้างมิตรภาพและร่วมกันปกป้องป่าแห่ง Hollow Land',
      subtitle: 'Guardian Community',
      features: ['ชุมชนอบอุ่น', 'ความสามารถพิเศษ', 'ปกป้องป่า']
    }
  ]

  return (
    <section id="story" className="story-section">
      <div className="story-background">
        <div className="magical-particles"></div>
        <div className="forest-overlay"></div>
      </div>
      
      <div className="container">
        <div className="story-header">
          <h2 className="section-title hollow-text hollow-glow">ตำนานแห่งป่าโบราณ</h2>
          <p className="section-subtitle">ค้นพบเรื่องราวมหัศจรรย์ในป่าลึกลับแห่งธรรมชาติ</p>
          <div className="story-divider">
            <span className="divider-line"></span>
            <span className="divider-icon">🌿</span>
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="story-timeline">
          {storyCards.map((card, index) => (
            <div key={index} className={`story-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker">
                <div className="marker-circle"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="story-card hollow-hover">
                <div className="card-image-container">
                  <div className="image-overlay"></div>
                  <Image 
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={350}
                    loading="lazy"
                    className="story-image"
                  />
                  <div className="image-glow"></div>
                </div>
                
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-subtitle">{card.subtitle}</p>
                  </div>
                  
                  <p className="card-description">{card.description}</p>
                  
                  <div className="card-features">
                    {card.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">
                        ✨ {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="card-footer">
                    <div className="magical-border"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="story-cta">
          <div className="cta-content">
            <h3 className="cta-title">พร้อมที่จะเริ่มการผจญภัยแล้วหรือยัง?</h3>
            <p className="cta-description">เข้าร่วมกับเราในการสำรวจป่าลึกลับแห่ง Hollow Land</p>
            <button className="cta-button hollow-hover">
              เริ่มการผจญภัย 🌿
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 