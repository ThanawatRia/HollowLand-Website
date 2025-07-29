export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="hollow-text">Hollow Land</h3>
            <p>ที่ความมหัศจรรย์และเวทมนตร์มาพบกัน</p>
          </div>
          <div className="footer-section">
            <h4>ลิงค์ด่วน</h4>
            <ul>
              <li>
                <a 
                  href="#story" 
                  className="hollow-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('story')
                  }}
                >
                  เรื่องราว
                </a>
              </li>
              <li>
                <a 
                  href="#houses" 
                  className="hollow-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('houses')
                  }}
                >
                  ตัวละคร
                </a>
              </li>
              <li>
                <a 
                  href="#store" 
                  className="hollow-hover"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('store')
                  }}
                >
                  ร้านค้า
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>ชุมชน</h4>
            <ul>
              <li><a href="https://discord.gg/EJnTzJKPH6" target="_blank" rel="noopener noreferrer" className="hollow-hover">Discord</a></li>
              <li><a href="#" className="hollow-hover">ฟอรั่ม</a></li>
              <li><a href="#" className="hollow-hover">สนับสนุน</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>เชื่อมต่อ</h4>
            <ul>
              <li><a href="#" className="hollow-hover">Facebook</a></li>
              <li><a href="#" className="hollow-hover">Twitter</a></li>
              <li><a href="#" className="hollow-hover">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Hollow Land สงวนสิทธิ์เวทมนตร์ทั้งหมด ✨</p>
        </div>
      </div>
    </footer>
  )
} 