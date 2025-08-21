export default function Home() {
  return (
    <div style={{
      backgroundColor: "#0a0a0a",
      color: "#f5f5f5",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Andrey Spivak
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Logger • Playback Operator • Data Manager
      </p>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Filmography</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li><a href="https://www.kinopoisk.ru/series/1207237/" target="_blank">Проект 1 (Kinopoisk)</a></li>
        <li><a href="https://www.kinopoisk.ru/series/2000034/" target="_blank">Проект 2 (Kinopoisk)</a></li>
        <li><a href="https://www.kinopoisk.ru/series/4714996/" target="_blank">Проект 3 (Kinopoisk)</a></li>
        <li><a href="https://www.kinopoisk.ru/film/5394675/" target="_blank">Проект 4 (Kinopoisk)</a></li>
        <li><a href="https://www.kinopoisk.ru/series/5394456/" target="_blank">Проект 5 (Kinopoisk)</a></li>
        <li><a href="https://www.kinopoisk.ru/film/5368403/" target="_blank">Проект 6 (Kinopoisk)</a></li>
        <li><a href="https://www.kinopoisk.ru/film/6099781/" target="_blank">Проект 7 (Kinopoisk)</a></li>
      </ul>
    </div>
  )
}
