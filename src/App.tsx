import React, { useState } from 'react';

export default function App() {
  // จำลองข้อมูลหมู่บ้าน 3 แห่งตามหน้าจอคุณหนิง
  const [villages] = useState([
    { id: 1, name: 'หมู่บ้านแสนสิริ สุขุมวิท 77', zone: 'กรุงเทพฯ ตะวันออก', contact: 'คุณสมศักดิ์ รักสงบ', phone: '0812345678', status: 'อนุญาตเข้าจัดกิจกรรม', years: ['2024'] },
    { id: 2, name: 'หมู่บ้านลัดดารมย์ ปิ่นเกล้า', zone: 'กรุงเทพฯ ธนบุรี', contact: 'คุณหญิงวรรณา รุ่งเรือง', phone: '0898765432', status: 'รอการตอบกลับ', years: ['2024'] },
    { id: 3, name: 'หมู่บ้านพฤกษา วิลล์ ดอนเมือง', zone: 'กรุงเทพฯ เหนือ', contact: 'คุณประดิษฐ์ มั่นคง', phone: '023456789', status: 'ปฏิเสธการเข้าทำ', years: [] },
  ]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans antialiased pb-12">
      {/* Header สวยหรูระดับ Premium */}
      <header className="border-b border-slate-800 bg-[#111827]/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 text-xl">📍</div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">V-Permission</h1>
            <p className="text-xs text-slate-400 tracking-wider uppercase">REC-DEPARTMENT</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-medium border border-emerald-500/20">ระบบออนไลน์แล้ว</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* หัวข้อหลัก */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">ระบบขออนุญาตเข้าทำกิจกรรมจัดหาผู้บริจาคโลหิตเชิงรุก</h2>
          <p className="text-slate-400 text-sm mt-1">มุ่งเน้นการสื่อสารความเสี่ยงและผลประโยชน์ต่อส่วนรวม</p>
        </div>

        {/* แถบแจ้งเตือนล่าช้าแบบเด่นชัด */}
        <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-3 items-start">
          <span className="text-xl text-amber-400 mt-0.5">🔔</span>
          <div>
            <h4 className="font-semibold text-amber-400 text-sm">ระบบตรวจพบความล่าช้าในการขออนุมัติ</h4>
            <p className="text-slate-300 text-xs mt-0.5">หมู่บ้าน "หมู่บ้านลัดดารมย์ ปิ่นเกล้า" ค้างสถานะรอการตอบกลับนานกว่า 74 วันแล้ว กรุณาเร่งติดตามผลค่ะ</p>
          </div>
        </div>

        {/* ตารางข้อมูลแบบ Luxury Dashboard */}
        <div className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-[#151f32]">
            <h3 className="font-semibold text-white text-sm flex items-center gap-2">📊 ฐานข้อมูลหมู่บ้านจัดสรร ({villages.length})</h3>
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium px-4 py-2 rounded-lg transition-all shadow-lg shadow-emerald-600/10 flex items-center gap-1.5">
              <span>➕</span> ลงทะเบียนหมู่บ้านเพิ่ม
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 bg-[#111827]/50 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-medium">ชื่อหมู่บ้านจัดสรร</th>
                  <th className="py-3.5 px-6 font-medium">โซน/จังหวัด</th>
                  <th className="py-3.5 px-6 font-medium">ผู้แทนนิติบุคคล</th>
                  <th className="py-3.5 px-6 font-medium">เบอร์โทรศัพท์</th>
                  <th className="py-3.5 px-6 font-medium">สถานะล่าสุด</th>
                  <th className="py-3.5 px-6 font-medium">ประวัติปีที่ทำกิจกรรม</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {villages.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-white">{v.name}</td>
                    <td className="py-4 px-6 text-slate-300">{v.zone}</td>
                    <td className="py-4 px-6 text-slate-300">{v.contact}</td>
                    <td className="py-4 px-6 text-slate-400 font-mono">{v.phone}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                        v.status.includes('อนุญาต') ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                        v.status.includes('รอ') ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                        'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      }`}>
                        {v.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {v.years.length > 0 ? (
                        v.years.map(y => <span key={y} className="bg-slate-800 text-slate-300 text-xs px-2 py-0.5 rounded border border-slate-700 font-mono">{y}</span>)
                      ) : (
                        <span className="text-slate-500 text-xs italic">ไม่มีประวัติ</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}