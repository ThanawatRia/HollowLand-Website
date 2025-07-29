'use client'

import Image from 'next/image'

export default function HousesSection() {
  const characters = [
    {
      image: '/House/7.png',
      name: 'Luna ผู้ครองแสงจันทร์',
      type: 'นักเวทจันทรา',
      stats: { magic: 90, wisdom: 85 },
      abilities: ['แสงจันทรา', 'มองเห็นในความมืด', 'เดินในฝัน']
    },
    {
      image: '/House/16.png',
      name: 'Stellaris แห่งดวงดาว',
      type: 'พ่อมดดาราศาสตร์',
      stats: { magic: 95, wisdom: 80 },
      abilities: ['แสงดาว', 'กลุ่มดาว', 'เดินทางข้ามมิติ']
    },
    {
      image: '/House/17.png',
      name: 'Crystal หัวใจอัญมณี',
      type: 'หมอผีคริสตัล',
      stats: { magic: 88, wisdom: 92 },
      abilities: ['เกราะคริสตัล', 'เวทย์อัญมณี', 'พลังแผ่นดิน']
    },
    {
      image: '/House/18.png',
      name: 'Verdant ผู้พิทักษ์',
      type: 'เดรูอิดแห่งป่า',
      stats: { magic: 82, wisdom: 95 },
      abilities: ['การเจริญเติบโต', 'ภาษาสัตว์', 'พลังธรรมชาติ']
    },
    {
      image: '/House/19.png',
      name: 'Zephyr นางฟ้าลม',
      type: 'จ้าวแห่งสายลม',
      stats: { magic: 93, wisdom: 78 },
      abilities: ['ควบคุมลม', 'บินผ่านฟ้า', 'พายุแสงรุ่ง']
    },
    {
      image: '/House/20.png',
      name: 'Shade ผู้ลึกลับ',
      type: 'เงาแห่งความลับ',
      stats: { magic: 97, wisdom: 88 },
      abilities: ['เดินผ่านเงา', 'ภาพลวงตา', 'ม่านจิต']
    }
  ]

  return (
    <section id="houses" className="houses-section">
      <div className="container">
        <h2 className="section-title hollow-text hollow-glow">เลือกตัวละครของคุณ</h2>
        <p className="section-subtitle">ค้นพบตัวตนและพลังเวทย์เฉพาะตัวในดินแดน Hollow Land</p>
        <div className="character-grid">
          {characters.map((character, index) => (
            <div key={index} className="character-showcase hollow-hover">
              <div className="character-card">
                <div className="character-image">
                  <Image 
                    src={character.image}
                    alt={character.name}
                    width={400}
                    height={250}
                    loading="lazy"
                  />
                  <div className="character-glow"></div>
                </div>
                <div className="character-info">
                  <h3 className="character-name">{character.name}</h3>
                  <p className="character-type">{character.type}</p>
                  <div className="character-stats">
                    <div className="stat">
                      <span className="stat-label">เวทมนตร์:</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: `${character.stats.magic}%` }}></div>
                      </div>
                    </div>
                    <div className="stat">
                      <span className="stat-label">ปัญญา:</span>
                      <div className="stat-bar">
                        <div className="stat-fill" style={{ width: `${character.stats.wisdom}%` }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="character-abilities">
                    {character.abilities.map((ability, abilityIndex) => (
                      <span key={abilityIndex} className="ability">{ability}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 