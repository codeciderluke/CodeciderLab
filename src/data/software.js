export const software = [
  {
    id: 'ultra-fast-zip',
    name: 'Ultra Fast Zip',
    category: 'file-system',
    version: '1.0.0',
    released: '2026-07-14',
    license: 'MIT',
    language: 'Python 3.11+',
    github: 'https://github.com/codeciderluke/ultra-fast-zip',
    downloadUrl: 'https://github.com/codeciderluke/ultra-fast-zip/releases',
    summary: {
      en: 'A desktop & CLI archiving tool optimized for folders with huge numbers of small files, powered by block-based Zstandard compression and the .ufz format.',
      ko: '수많은 작은 파일이 담긴 폴더에 최적화된 데스크톱/CLI 압축 도구. 블록 기반 Zstandard 압축과 자체 .ufz 포맷을 사용합니다.',
    },
    overview: {
      en: 'Ultra Fast Zip packs folders into its proprietary .ufz archives using block-based Zstandard compression with configurable block sizes (1–32 MB) and compression levels (1–22). Extraction runs on a parallel pipeline, and the tool auto-detects and extracts common formats including zip, 7z, rar, tar variants, gz, bz2, xz, zst, cab, and iso. Archives can be inspected — metadata and a searchable file list — without decompressing. Security features include Zip Slip protection and dual block/file checksums on extraction. Ships as a dark-themed PySide6 desktop app with responsive background workers, plus a standalone CLI.',
      ko: 'Ultra Fast Zip은 블록 기반 Zstandard 압축을 사용해 폴더를 자체 .ufz 아카이브로 압축합니다. 블록 크기(1–32MB)와 압축 레벨(1–22)을 자유롭게 설정할 수 있으며, 압축 해제는 병렬 파이프라인으로 동작합니다. zip, 7z, rar, tar 계열, gz, bz2, xz, zst, cab, iso 등 주요 포맷을 자동 감지하여 해제할 수 있고, 압축을 풀지 않고도 메타데이터와 검색 가능한 파일 목록을 확인할 수 있습니다. Zip Slip 보호와 블록/파일 이중 체크섬으로 안전성을 확보했으며, 다크 테마 PySide6 데스크톱 앱과 독립 CLI를 함께 제공합니다.',
    },
    features: {
      en: [
        'Compress folders into .ufz archives — block sizes 1–32 MB, levels 1–22',
        'Parallel pipeline extraction; auto-detects zip, 7z, rar, tar, gz, bz2, xz, zst, cab, iso',
        'Inspect archive metadata and searchable file lists without decompression',
        'Zip Slip protection and dual block/file checksums on extraction',
        'Dark-themed PySide6 GUI with background workers, plus a standalone CLI',
      ],
      ko: [
        '폴더를 .ufz 아카이브로 압축 — 블록 크기 1–32MB, 압축 레벨 1–22',
        '병렬 파이프라인 압축 해제; zip, 7z, rar, tar, gz, bz2, xz, zst, cab, iso 자동 감지',
        '압축 해제 없이 아카이브 메타데이터와 검색 가능한 파일 목록 확인',
        'Zip Slip 보호 및 블록/파일 이중 체크섬 검증',
        '다크 테마 PySide6 GUI(백그라운드 워커) + 독립형 CLI 제공',
      ],
    },
    techStack: ['Python', 'Zstandard', 'xxHash64', 'PySide6'],
    benchmark: {
      en: 'Mixed dataset (4,412 files / 322 MB) — Pack: 2.0s · Unpack: 0.8s · Ratio: 17.0%, comparing favorably against ZIP and tar.gz.',
      ko: '혼합 데이터셋(4,412개 파일 / 322MB) 기준 — 압축 2.0초 · 해제 0.8초 · 압축률 17.0%로 ZIP, tar.gz 대비 우수한 성능을 보입니다.',
    },
  },
  {
    id: 'human-photo-classifier',
    name: 'Human Photo Classifier',
    category: 'media',
    version: '1.0.0',
    released: '2026-07-16',
    license: 'AGPL-3.0',
    language: 'Python 3.11+',
    github: 'https://github.com/codeciderluke/human-photo-classifier',
    downloadUrl: 'https://github.com/codeciderluke/human-photo-classifier/releases',
    summary: {
      en: 'A desktop & CLI tool that automatically finds photos containing people in a source folder and copies them to a destination, powered by YOLOv11 person detection with optional InsightFace face and gender sorting.',
      ko: 'YOLOv11 사람 감지를 기반으로 원본 폴더에서 사람이 담긴 사진을 자동으로 찾아 대상 폴더로 복사하는 데스크톱/CLI 도구. InsightFace 기반 얼굴·성별 분류를 선택적으로 지원합니다.',
    },
    overview: {
      en: 'Human Photo Classifier scans a source folder, detects images containing people with YOLOv11, and copies the matches into a destination folder while preserving structure. The detection engine is architecturally separated from the GUI behind an abstract ImagePersonFilter interface, so it can be reused or swapped. Models are loaded once and reused across every image, and detection runs on a background thread to keep the UI responsive; jobs can be cancelled safely at any time. Corrupt files are excluded, while partially damaged person photos are routed to others/damaged. Optional InsightFace analysis adds face detection and gender classification, automatically organizing results into with_face/no_face and male/female subfolders. Ships as a dark-themed PyQt5 desktop app tuned for Full HD, with a full CLI and pre-built Windows executables that require no Python install. Released under the AGPL-3.0 license — required by its Ultralytics YOLO (AGPL-3.0) and PyQt5 (GPL-3.0) dependencies — and note that the bundled InsightFace models are restricted to non-commercial research use.',
      ko: 'Human Photo Classifier는 원본 폴더를 스캔해 YOLOv11로 사람이 포함된 이미지를 감지하고, 구조를 유지한 채 대상 폴더로 복사합니다. 감지 엔진은 추상 ImagePersonFilter 인터페이스 뒤에서 GUI와 분리되어 있어 재사용하거나 교체할 수 있습니다. 모델은 한 번만 로드해 모든 이미지에 재사용하며, 감지는 백그라운드 스레드에서 실행되어 UI가 멈추지 않고 작업을 언제든 안전하게 취소할 수 있습니다. 손상된 파일은 제외하고, 일부만 손상된 사람 사진은 others/damaged 폴더로 분류합니다. 선택적 InsightFace 분석을 통해 얼굴 감지와 성별 분류를 추가할 수 있으며, 결과를 with_face/no_face 및 male/female 하위 폴더로 자동 정리합니다. Full HD에 맞춘 다크 테마 PyQt5 데스크톱 앱과 전체 CLI, 그리고 Python 설치가 필요 없는 사전 빌드 Windows 실행 파일을 함께 제공합니다. Ultralytics YOLO(AGPL-3.0) 및 PyQt5(GPL-3.0) 의존성에 따라 AGPL-3.0 라이선스로 배포되며, 번들된 InsightFace 모델은 비상업적 연구 용도로만 사용할 수 있습니다.',
    },
    features: {
      en: [
        'Automatic person detection with YOLOv11 — copies matching photos to a destination folder',
        'Optional InsightFace face detection and gender classification with auto-organized subfolders',
        'Layered architecture — GUI, detection filters, and file services are fully decoupled',
        'Background-threaded, cancellable jobs with single model load reused across images',
        'Corrupt-image handling — damaged person photos routed to others/damaged',
        'Dark-themed PyQt5 GUI plus a full CLI; GPU acceleration via CPU/CUDA selection',
      ],
      ko: [
        'YOLOv11 기반 자동 사람 감지 — 일치하는 사진을 대상 폴더로 복사',
        '선택적 InsightFace 얼굴 감지 및 성별 분류, 하위 폴더 자동 정리',
        '계층형 아키텍처 — GUI, 감지 필터, 파일 서비스 완전 분리',
        '백그라운드 스레드 처리 및 취소 가능한 작업, 모델 단일 로드 후 재사용',
        '손상 이미지 처리 — 손상된 사람 사진은 others/damaged로 분류',
        '다크 테마 PyQt5 GUI + 전체 CLI; CPU/CUDA 선택으로 GPU 가속 지원',
      ],
    },
    techStack: ['Python', 'PyQt5', 'Ultralytics YOLO', 'InsightFace', 'ONNX Runtime', 'PyTorch'],
  },
  {
    id: 'photo-time-classifier',
    name: 'Photo Time Classifier',
    category: 'media',
    version: '1.0.0',
    released: '2026-07-17',
    license: 'AGPL-3.0',
    language: 'Python',
    github: 'https://github.com/codeciderluke/photo-time-classifier',
    downloadUrl: 'https://github.com/codeciderluke/photo-time-classifier/releases',
    summary: {
      en: 'A desktop & CLI tool that automatically organizes photos into folders by their EXIF shot time — the moment the shutter actually fired, not the file timestamp — with year, month, or day granularity.',
      ko: '파일 타임스탬프가 아닌 EXIF 촬영 시각을 기준으로 사진을 연·월·일 단위 폴더로 자동 정리하는 데스크톱/CLI 도구입니다.',
    },
    overview: {
      en: 'Photo Time Classifier reads each photo\'s EXIF shot time and sorts it into folders by year, month, or day — one granularity per run. Because it uses the actual shutter time rather than filesystem timestamps, ordering survives copying, syncing, and re-downloading. Photos with no EXIF shot time are routed to an others folder, and corrupt or partially damaged files are segregated into Damaged rather than silently dropped. Duplicate filenames are resolved with collision-safe naming (name_1.jpg, name_2.jpg). HEIC/HEIF is supported via pi-heif, so iPhone libraries work alongside JPEG, PNG, BMP, WebP, and TIFF. The classification logic is decoupled from the GUI behind a layered architecture, so it can be reused from the CLI, batch jobs, server APIs, and tests. Processing is asynchronous to keep the UI responsive, and jobs can be cancelled safely at any point. Ships as a dark-themed PyQt5 desktop app tuned for Full HD, with a full CLI and pre-built Windows executables that require no Python install. Released under AGPL-3.0 for compatibility with its PyQt5 (GPL-3.0) dependency.',
      ko: 'Photo Time Classifier는 각 사진의 EXIF 촬영 시각을 읽어 연·월·일 단위 폴더로 분류합니다(실행당 하나의 기준). 파일시스템 타임스탬프가 아닌 실제 셔터 작동 시각을 사용하므로 복사·동기화·재다운로드 후에도 정렬 순서가 유지됩니다. EXIF 촬영 시각이 없는 사진은 others 폴더로 보내고, 손상되었거나 일부만 손상된 파일은 조용히 누락시키지 않고 Damaged 폴더로 분리합니다. 파일명이 겹칠 경우 name_1.jpg, name_2.jpg 형태로 안전하게 이름을 부여합니다. pi-heif를 통해 HEIC/HEIF를 지원하여 iPhone 사진 라이브러리도 JPEG, PNG, BMP, WebP, TIFF와 함께 처리할 수 있습니다. 분류 로직은 계층형 아키텍처로 GUI와 분리되어 있어 CLI, 배치 작업, 서버 API, 테스트에서 재사용할 수 있습니다. 비동기 처리로 UI가 멈추지 않으며 작업은 언제든 안전하게 취소할 수 있습니다. Full HD에 맞춘 다크 테마 PyQt5 데스크톱 앱과 전체 CLI, Python 설치가 필요 없는 사전 빌드 Windows 실행 파일을 제공합니다. PyQt5(GPL-3.0) 의존성과의 호환을 위해 AGPL-3.0 라이선스로 배포됩니다.',
    },
    features: {
      en: [
        'Sorts by EXIF shot time — the actual shutter moment, not file timestamps',
        'Year, month, or day granularity, one per run; photos without EXIF go to others',
        'HEIC/HEIF support via pi-heif, plus JPEG, PNG, BMP, WebP, and TIFF',
        'Damage detection — corrupt or partially damaged files segregated to Damaged',
        'Collision-safe naming for duplicate filenames (name_1.jpg, name_2.jpg)',
        'Layered architecture — GUI, filters, and services stay independent',
        'Asynchronous, cancellable jobs; dark-themed PyQt5 GUI plus a full CLI',
      ],
      ko: [
        '파일 타임스탬프가 아닌 실제 EXIF 촬영 시각 기준 정렬',
        '실행당 연·월·일 중 하나의 기준 선택; EXIF가 없는 사진은 others 폴더로 분류',
        'pi-heif 기반 HEIC/HEIF 지원 및 JPEG, PNG, BMP, WebP, TIFF 처리',
        '손상 감지 — 손상되었거나 일부 손상된 파일은 Damaged 폴더로 분리',
        '파일명 충돌 시 안전한 이름 부여(name_1.jpg, name_2.jpg)',
        '계층형 아키텍처 — GUI, 필터, 서비스 완전 분리',
        '비동기 처리 및 취소 가능한 작업; 다크 테마 PyQt5 GUI + 전체 CLI',
      ],
    },
    techStack: ['Python', 'PyQt5', 'Pillow', 'pi-heif', 'pytest', 'PyInstaller'],
  },
  {
    id: 'mycom-information',
    name: 'Mycom Information',
    category: 'file-system',
    version: '1.0.0',
    released: '2026-07-17',
    license: 'GPL-3.0-or-later',
    language: 'Python 3.10+',
    github: 'https://github.com/codeciderluke/Mycom-Information',
    downloadUrl: 'https://github.com/codeciderluke/Mycom-Information/releases',
    summary: {
      en: 'A desktop dashboard that collects the hardware and software specifications of the machine it runs on, and exports them as JSON, plain text, or a printable A4 PDF report.',
      ko: '실행 중인 PC의 하드웨어·소프트웨어 사양을 수집해 대시보드로 보여주고, JSON·일반 텍스트·인쇄용 A4 PDF 보고서로 내보내는 데스크톱 도구입니다.',
    },
    overview: {
      en: 'Mycom Information probes the machine it runs on and presents the results across two tabs — Hardware and Software — as summary cards. Hardware coverage includes CPU specs, motherboard details, GPU info, display EDID data, memory, storage usage, and BIOS/firmware. Software coverage includes the OS version, Python and PyQt versions, Git, Node.js/npm, developer tooling (Docker, Java, .NET, CMake, PowerShell), and network interfaces. The interface follows a summary-first, detail-on-demand approach: cards expand for full detail and can be focused individually, with dark and light themes available. Collection runs on a non-blocking background thread so the UI never freezes, and probes degrade gracefully — anything that fails is reported as "Unavailable" instead of crashing the app. Results export to JSON, plain text, or a printable A4 PDF, with direct printing and print preview supported. Prebuilt Windows executables are available, or it can run from source via run.bat or a manual venv. Released under GPL-3.0-or-later, as linking against PyQt5 (GPL v3) requires GPL-compatible terms.',
      ko: 'Mycom Information은 실행 중인 컴퓨터를 조사해 결과를 하드웨어·소프트웨어 두 개의 탭에 요약 카드 형태로 보여줍니다. 하드웨어는 CPU 사양, 메인보드 정보, GPU, 디스플레이 EDID 데이터, 메모리, 저장장치 사용량, BIOS/펌웨어를 다루고, 소프트웨어는 OS 버전, Python·PyQt 버전, Git, Node.js/npm, 개발 도구(Docker, Java, .NET, CMake, PowerShell), 네트워크 인터페이스를 다룹니다. 인터페이스는 요약을 먼저 보여주고 필요할 때 상세를 펼치는 방식으로, 카드를 확장하거나 개별 카드에 집중해서 볼 수 있으며 다크·라이트 테마를 지원합니다. 정보 수집은 논블로킹 백그라운드 스레드에서 실행되어 UI가 멈추지 않으며, 조사에 실패한 항목은 앱을 중단시키지 않고 "Unavailable"로 표시됩니다. 결과는 JSON, 일반 텍스트, 인쇄용 A4 PDF로 내보낼 수 있고 미리보기와 직접 인쇄도 지원합니다. 사전 빌드된 Windows 실행 파일을 제공하며, run.bat 또는 수동 venv 설정으로 소스에서 실행할 수도 있습니다. PyQt5(GPL v3) 링크에 GPL 호환 조건이 필요하므로 GPL-3.0-or-later 라이선스로 배포됩니다.',
    },
    features: {
      en: [
        'Hardware tab — CPU, motherboard, GPU, display EDID, memory, storage, BIOS/firmware',
        'Software tab — OS, Python/PyQt, Git, Node.js/npm, Docker, Java, .NET, CMake, PowerShell, network interfaces',
        'Summary-first cards that expand on demand, with dark and light themes',
        'Export to JSON, plain text, or a printable A4 PDF; direct printing with preview',
        'Non-blocking background collection thread keeps the UI responsive',
        'Graceful degradation — failed probes report as "Unavailable" rather than crashing',
      ],
      ko: [
        '하드웨어 탭 — CPU, 메인보드, GPU, 디스플레이 EDID, 메모리, 저장장치, BIOS/펌웨어',
        '소프트웨어 탭 — OS, Python/PyQt, Git, Node.js/npm, Docker, Java, .NET, CMake, PowerShell, 네트워크 인터페이스',
        '요약 우선 카드 구성, 필요 시 상세 확장; 다크·라이트 테마 지원',
        'JSON·일반 텍스트·인쇄용 A4 PDF 내보내기 및 미리보기 기반 직접 인쇄',
        '논블로킹 백그라운드 수집 스레드로 UI 응답성 유지',
        '안전한 실패 처리 — 조사 실패 항목은 앱 중단 없이 "Unavailable"로 표시',
      ],
    },
    techStack: ['Python', 'PyQt5', 'psutil', 'PyInstaller'],
  },
  {
    id: 'ultra-fast-copy',
    name: 'Ultra Fast Copy',
    category: 'file-system',
    version: '0.1.0',
    released: '2026-07-18',
    license: 'MIT',
    language: 'Python 3.12+',
    github: 'https://github.com/codeciderluke/ultra-fast-copy',
    downloadUrl: 'https://github.com/codeciderluke/ultra-fast-copy/releases',
    summary: {
      en: 'A high-performance file copy/move tool for Windows with a CLI and PySide6 GUI on one shared engine — built for the cases where Explorer bogs down, with verification, retry, and resume.',
      ko: 'Windows용 고성능 파일 복사/이동 도구. 하나의 공용 엔진 위에 CLI와 PySide6 GUI를 함께 제공하며, 탐색기가 버거워하는 상황을 위해 검증·재시도·이어하기를 갖췄습니다.',
    },
    overview: {
      en: 'Ultra Fast Copy is built for the transfers where Windows Explorer bogs down — hundreds of thousands of files, network drives, and interrupted jobs. Rather than just copying in parallel, it adapts to file size, storage device (HDD/SSD/network), and network conditions, automatically choosing the worker count. Moves are handled safely: a same-volume move is a rename, while a cross-volume move is copy → verify → delete, keeping the original if verification fails. Interrupted jobs resume from a SQLite checkpoint so already-finished files are never copied twice, and each file can be verified by size, mtime+size, xxHash, or SHA-256. Conflicts are governed by policy (skip, overwrite, overwrite-if-newer, overwrite-if-different, rename, or ask), and partial files are written to a .fasttransfer.partial name and atomically renamed only after verification. It is thoroughly Windows-aware — long paths, UNC, reserved device names, and Unicode — with per-file failure isolation so one bad file never stops the job. Ships as a dark-themed dual-pane PySide6 desktop app with drag-and-drop and Explorer right-click integration, plus a full CLI with JSON output for automation. Released under the MIT license.',
      ko: 'Ultra Fast Copy는 Windows 탐색기가 버거워하는 전송 — 수십만 개의 파일, 네트워크 드라이브, 중단된 작업 — 을 위해 만들어졌습니다. 단순 병렬 복사가 아니라 파일 크기, 저장장치 종류(HDD/SSD/네트워크), 네트워크 상태에 맞춰 워커 수를 자동으로 결정합니다. 이동은 안전하게 처리되어, 같은 볼륨 내 이동은 이름 변경으로, 볼륨 간 이동은 복사 → 검증 → 삭제 순으로 진행하며 검증에 실패하면 원본을 그대로 보존합니다. 중단된 작업은 SQLite 체크포인트에서 이어서 진행되어 이미 완료된 파일을 다시 복사하지 않으며, 파일별로 크기·mtime+크기·xxHash·SHA-256 검증을 선택할 수 있습니다. 충돌은 정책(건너뛰기, 덮어쓰기, 최신일 때 덮어쓰기, 다를 때 덮어쓰기, 이름 변경, 확인)으로 제어하고, 미완성 파일은 .fasttransfer.partial 이름으로 기록한 뒤 검증에 성공해야 최종 이름으로 원자적으로 변경됩니다. 긴 경로(\\?\\), UNC, 예약된 장치 이름, 유니코드 등 Windows 특성을 충실히 다루며, 파일별 실패 격리로 하나의 파일 오류가 전체 작업을 멈추지 않습니다. 드래그 앤 드롭과 탐색기 우클릭 통합을 지원하는 다크 테마 듀얼 페인 PySide6 데스크톱 앱과, 자동화를 위한 JSON 출력을 갖춘 전체 CLI를 함께 제공합니다. MIT 라이선스로 배포됩니다.',
    },
    features: {
      en: [
        'Environment-aware parallelism — worker count auto-tuned by device type and average file size',
        'Safe move — same-volume rename; cross-volume copy → verify → delete, original kept on failure',
        'Resume from a SQLite checkpoint — finished files are never re-copied after a hard stop',
        'Per-file verification: none / size / mtime+size / xxHash / SHA-256',
        'Conflict policies, partial-file isolation, and pause / resume / cancel on every job',
        'Windows-aware (long paths, UNC, Unicode) with per-file failure isolation',
        'Dual-pane PySide6 GUI with drag-and-drop and Explorer right-click integration, plus a full CLI',
      ],
      ko: [
        '환경 인식 병렬 처리 — 저장장치 종류와 평균 파일 크기에 따라 워커 수 자동 조정',
        '안전한 이동 — 같은 볼륨은 이름 변경, 볼륨 간은 복사 → 검증 → 삭제, 실패 시 원본 보존',
        'SQLite 체크포인트 이어하기 — 강제 종료 후에도 완료된 파일은 다시 복사하지 않음',
        '파일별 검증: none / size / mtime+size / xxHash / SHA-256',
        '충돌 정책, 미완성 파일 격리, 모든 작업의 일시정지 / 이어하기 / 취소 지원',
        'Windows 특성 대응(긴 경로, UNC, 유니코드) 및 파일별 실패 격리',
        '드래그 앤 드롭과 탐색기 우클릭 통합을 갖춘 듀얼 페인 PySide6 GUI + 전체 CLI',
      ],
    },
    techStack: ['Python', 'PySide6', 'xxHash', 'SQLite'],
    benchmark: {
      en: '20,000 files / 637 MB on one NVMe volume (warm cache) — 8.2s at 2,445 files/s, about 3.7× faster than Windows Explorer (30.0s) while adding verification, resume, and retry that Explorer lacks entirely.',
      ko: '단일 NVMe 볼륨(웜 캐시) 기준 20,000개 파일 / 637MB — 8.2초, 초당 2,445개 처리로 Windows 탐색기(30.0초) 대비 약 3.7배 빠르며, 탐색기에는 없는 검증·이어하기·재시도까지 제공합니다.',
    },
  },
]

export function getSoftware(id) {
  return software.find((s) => s.id === id)
}

export function getSoftwareByCategory(categoryId) {
  return software.filter((s) => s.category === categoryId)
}
