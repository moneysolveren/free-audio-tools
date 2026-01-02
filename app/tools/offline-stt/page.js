'use client'

export default function OfflineSTTPage() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#fff',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '40px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '40px'
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, textAlign: 'center', marginBottom: '8px' }}>
          🎙️ 離線語音轉文字
        </h1>
        <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '24px' }}>
          Offline Speech to Text - 100% 本地處理
        </p>
        
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            工具正在整合中...
          </p>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
            完整功能即將推出
          </p>
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            ← 返回首頁
          </a>
        </div>
      </div>
    </div>
  );
}