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
]

export function getSoftware(id) {
  return software.find((s) => s.id === id)
}

export function getSoftwareByCategory(categoryId) {
  return software.filter((s) => s.category === categoryId)
}
