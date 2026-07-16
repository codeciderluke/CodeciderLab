export const software = [
  {
    id: 'ultra-fast-zip',
    name: 'Ultra Fast Zip',
    category: 'utilities',
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
    category: 'multimedia',
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
]

export function getSoftware(id) {
  return software.find((s) => s.id === id)
}

export function getSoftwareByCategory(categoryId) {
  return software.filter((s) => s.category === categoryId)
}
