'use client'

import Image from 'next/image'

export default function StoreSection() {
  const products = [
    {
      image: '/Store/Monthly package.png',
      title: 'แพ็คเกจ Hollow Land พรีเมียม',
      description: 'ปลดล็อคพลังเวทมนตร์ระดับตำนาน บ้านมหัศจรรย์ และเครื่องแต่งกายสุดพิเศษในดินแดน Hollow Land',
      features: [
        'เวทมนตร์ทองคำเฉพาะตัว',
        'บ้านมหัศจรรย์ระดับตำนาน',
        'เครื่องแต่งกายนักผจญภัยพิเศษ',
        'พลังบินแบบผีเสื้อทอง',
        'การสนับสนุน VIP เฉพาะตัว'
      ]
    },
    {
      image: '/Store/HollowBeaste.png',
      title: 'สัตว์คู่หูแห่ง Hollow Land',
      description: 'รับเลี้ยงสัตว์วิเศษผู้เป็นเพื่อนคู่ใจในการผจญภัยสุดมหัศจรรย์ในดินแดนแห่งความฝัน',
      features: [
        'เพื่อนคู่ใจผู้จงรักภักดี',
        'พลังเวทมนตร์และทักษะพิเศษ',
        'ปรับแต่งรูปร่างและสีสันได้',
        'ช่วยเหลือในการต่อสู้',
        'ระบบผูกพันวิญญาณเฉพาะตัว'
      ]
    }
  ]

  const handlePurchase = () => {
    // Create magical sparkle effect - Fixed TypeScript error for Vercel deployment
    const sparkles: HTMLDivElement[] = []
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement('div')
      sparkle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, #FFD700, #8B4FBF);
        border-radius: 50%;
        pointer-events: none;
        animation: magicalSparkle 1.5s ease-out forwards;
        z-index: 9999;
        box-shadow: 0 0 10px #FFD700;
      `
      
      sparkle.style.left = (window.innerWidth / 2) + 'px'
      sparkle.style.top = (window.innerHeight / 2) + 'px'
      
      document.body.appendChild(sparkle)
      sparkles.push(sparkle)
      
      // Random direction for sparkle
      const angle = (Math.PI * 2 * i) / 30
      const velocity = 60 + Math.random() * 80
      const vx = Math.cos(angle) * velocity
      const vy = Math.sin(angle) * velocity
      
      sparkle.style.setProperty('--vx', vx + 'px')
      sparkle.style.setProperty('--vy', vy + 'px')
    }
    
    // Clean up sparkles
    setTimeout(() => {
      sparkles.forEach(sparkle => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle)
        }
      })
    }, 1500)
    
    alert('✨ ขอบคุณที่สนใจ! ระบบชำระเงินจะมาเร็วๆ นี้! ✨')
  }

  return (
    <section id="store" className="store-section">
      <div className="container">
        <h2 className="section-title hollow-text hollow-glow">ร้านค้าแห่ง Hollow Land</h2>
        <p className="section-subtitle">ปรับปรุงการผจญภัยของคุณด้วยไอเทมและพลังเวทย์พิเศษ</p>
        <div className="store-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card hollow-hover">
              <div className="product-image">
                <Image 
                  src={product.image}
                  alt={product.title}
                  width={450}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="product-features">
                  <ul>
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="buy-button hollow-hover"
                  onClick={handlePurchase}
                >
                  {index === 0 ? 'ซื้อพลังเวทมนตร์ ✨' : 'รับเลี้ยงเพื่อนคู่หู 🦋'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes magicalSparkle {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
            box-shadow: 0 0 10px #FFD700;
          }
          50% {
            opacity: 0.8;
            transform: translate(calc(var(--vx) * 0.5), calc(var(--vy) * 0.5)) scale(1.2);
            box-shadow: 0 0 20px #8B4FBF;
          }
          100% {
            opacity: 0;
            transform: translate(var(--vx), var(--vy)) scale(0);
            box-shadow: 0 0 5px #FF69B4;
          }
        }
      `}</style>
    </section>
  )
} 