# Audio Files Directory

## Required Files

เพื่อให้เสียงดนตรีพื้นหลังทำงานได้อย่างสมบูรณ์ กรุณาเพิ่มไฟล์เสียงต่อไปนี้ในโฟลเดอร์นี้:

### Background Music
- `background-music.mp3` - ไฟล์เสียงดนตรีพื้นหลัง (format MP3)
- `background-music.ogg` - ไฟล์เสียงดนตรีพื้นหลัง (format OGG สำหรับ browser compatibility)

## Recommended Settings

### Audio File Specifications:
- **Format**: MP3 และ OGG (เพื่อรองรับทุก browser)
- **Bitrate**: 128 kbps หรือสูงกว่า
- **Sample Rate**: 44.1 kHz
- **Duration**: 2-5 นาที (จะวนซ้ำอัตโนมัติ)
- **Volume**: ไม่เกิน 0dB (จะปรับระดับเสียงเหลือ 30% ใน code)

### Recommended Music Style:
- 🌿 Ambient forest sounds
- 🎵 Fantasy/medieval instrumental
- 🌲 Nature-inspired melodies
- ✨ Magical/mystical themes

## File Placement
```
public/
  audio/
    ├── background-music.mp3
    ├── background-music.ogg
    └── README.md (this file)
```

## Usage
ไฟล์เสียงจะถูกโหลดโดย `AudioPlayer` component และสามารถควบคุมเปิด/ปิดได้ผ่านไอคอนใน Navigation Bar

## Notes
- ไฟล์เสียงควรมีขนาดไม่เกิน 10MB เพื่อให้โหลดเร็ว
- รองรับ auto-loop เมื่อเพลงจบ
- มี fade in/out effects เมื่อเปิด/ปิดเสียง
- Volume ถูกตั้งเป็น 30% เพื่อไม่รบกวนผู้ใช้ 