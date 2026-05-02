import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ReactTerminal } from "react-terminal";

function App() {
  const commands = {
    whoami: () => (
      <div>
        <p><strong>Name :</strong> CHARDERRA EKA BAGAS SANJAYA</p>
        <p><strong>Role :</strong> Backend Developer - Network Administrator - Cloud Computing Engineer</p>
        <p><strong>Bio  :</strong> Fresh Graduate Teknik Informatika dari Universitas Esa Unggul dengan IPK 3.74. Memiliki minat besar di bidang Backend Developer, khususnya dalam pemrosesan data, perancangan alur program, dan keamanan data sebelum disimpan untuk kebutuhan aplikasi.</p>
      </div>
    ),
    
    skills: () => (
      <div>
        <p><strong>Programming :</strong> JavaScript, PHP, Python, Dart</p>
        <p><strong>Frameworks  :</strong> NodeJS, ExpressJS, Laravel, Flask, Flutter</p>
        <p><strong>Cloud/DevOps:</strong> Google Cloud Platform, Alibaba Cloud, Docker, Git</p>
        <p><strong>Networking  :</strong> Mikrotik, Cisco</p>
        <p><strong>Core Concept:</strong> RESTful API, Database Management</p>
      </div>
    ),

    experience: () => (
      <div>
        <br />
        <p><strong>1. Backend Developer (Intern) - PT Sumber Alfaria Trijaya Tbk (Alfamart)</strong></p>
        <p>   Nov 2025 - May 2026 | Merancang arsitektur data, keamanan web, infrastruktur deployment cloud, dan mengembangkan web manajemen (SPARTA).</p>
        <br />
        <p><strong>2. Freelance Web Developer</strong></p>
        <p>   Sep 2022 - Aug 2025 | Mengembangkan web dengan Laravel, implementasi RESTful API, dan memastikan kualitas kode.</p>
        <br />
        <p><strong>3. Lecturer Assistant - Universitas Esa Unggul</strong></p>
        <p>   Mar 2024 - Jun 2025 | Asisten praktikum mata kuliah Data Structure dan Internet of Things.</p>
        <br />
        <p><strong>4. IT Network Administrator - Citra Java Media Net</strong></p>
        <p>   Dec 2021 - Mar 2022 | Konfigurasi Mikrotik, monitoring jaringan, dan troubleshooting.</p>
      </div>
    ),
    
    projects: () => (
      <div>
        <br />
        <p><strong>1. SPARTA (System Property Administration Reporting Tracking Approval)</strong></p>
        <p>   Tech: Javascript, Flask, SQL</p>
        <p>   Desc: Corporate management web app untuk Alfamart dengan fitur autentikasi, RBAC, dan sistem reporting.</p>
        <br />
        <p><strong>2. Capstone App Bangkit Academy 2023</strong></p>
        <p>   Tech: Laravel 10, PHP</p>
        <p>   Desc: Mengembangkan core backend system dan merancang RESTful APIs untuk final project Bangkit Batch 2.</p>
        <br />
        <p><strong>3. Website Central Durian Cisoka & Pencatatan Barang PT Mayora</strong></p>
        <p>   Tech: PHP, Laravel, Blade</p>
        <p>   Desc: Membangun website reservasi restoran dan sistem tracking aset/dokumen.</p>
      </div>
    ),

    contact: () => (
      <div>
        <p><strong>Email   :</strong> charderrasanjaya@gmail.com</p>
        <p><strong>Phone   :</strong> +62 852-8434-9884</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/charderra-sanjaya</p>
        <p><strong>GitHub  :</strong> github.com/bagas-sanjaya-UeU</p>
      </div>
    ),
    
    help: "Available commands: whoami, skills, experience, projects, contact, clear"
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#000" }}>
      <ReactTerminal
        commands={commands}
        welcomeMessage={
          <div>
            <p>Welcome to CharOS v1.0.0 (GNU/Linux x86_64)</p>
            <p>System loaded successfully.</p>
            <p>Type 'help' to see the list of available commands.</p>
            <br />
          </div>
        }
        prompt="visitor@charderra-web:~$"
        themes={{
          hackerTheme: {
            themeBGColor: "#000000",
            themeToolbarColor: "#1a1a1a",
            themeColor: "#00FF00",
            themePromptColor: "#00FF00"
          }
        }}
        theme="hackerTheme"
      />
    </div>
  );
}

export default App;
