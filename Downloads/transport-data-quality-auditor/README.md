# 🚚 Transport Data Quality Auditor

A production-style Python pipeline that audits last-mile delivery records for data quality issues, flags outliers and exceptions, and generates a structured multi-sheet Excel report — built to mirror real-world operations quality workflows.

---

## 📌 Project Highlights

| Metric | Value |
|--------|-------|
| Dataset size | 10,000 simulated delivery records |
| Checks performed | 6 quality dimensions |
| Flag rate (typical) | ~10–12% of records |
| Output | Multi-sheet Excel report with chart |
| Test coverage | 20+ unit tests across all modules |

---

## 🗂️ Project Structure

```
transport-data-quality-auditor/
│
├── main.py                    # Entry point — runs full pipeline
│
├── src/
│   ├── generate_data.py       # Generates 10,000 simulated delivery records
│   ├── audit_engine.py        # Core quality checks (6 dimensions)
│   └── report_generator.py    # Writes formatted multi-sheet Excel report
│
├── tests/
│   └── test_audit_engine.py   # 20+ unit tests (pytest)
│
├── data/                      # CSV files (generated at runtime)
├── reports/                   # Excel reports (generated at runtime)
├── requirements.txt
└── .gitignore
```

---

## ✅ Quality Checks

| Check | Severity | Description |
|-------|----------|-------------|
| **Geocode Validation** | HIGH | Latitude/longitude out of valid range or missing |
| **Duplicate Detection** | HIGH | Repeated `delivery_id` values |
| **Address Validation** | MEDIUM | Blank, placeholder (`N/A`, `null`), or too short |
| **Duration Outliers** | MEDIUM | Negative, zero, or > 720 minutes |
| **Status Validation** | MEDIUM | Values outside `{DELIVERED, FAILED, PENDING, RETURNED}` |
| **Missing Fields** | LOW | `driver_id` blank or missing |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Bhagyasrimaddisetty/transport-data-quality-auditor.git
cd transport-data-quality-auditor
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the full pipeline
```bash
python main.py
```
This will:
- Generate `data/delivery_records.csv` (10,000 records)
- Run all 6 audit checks
- Print a summary table to the terminal
- Save `reports/audit_report.xlsx`

### 4. Use your own data
```bash
python main.py --input data/your_file.csv --output reports/your_report.xlsx
```

> Your CSV must include these columns:  
> `delivery_id, driver_id, city, zone, address, latitude, longitude,`  
> `delivery_status, duration_minutes, distance_km, attempt_number, record_date`

---

## 📊 Sample Terminal Output

```
=======================================================
  TRANSPORT DATA QUALITY AUDIT — RESULTS SUMMARY
=======================================================
  Total records      : 10,000
  Flagged records    : 1,047  (10.47%)
  Clean records      : 8,953
-------------------------------------------------------
  Geocode Issues      :  412  ████████████████████
  Duplicate IDs       :   98  ████
  Address Issues      :  201  ██████████
  Duration Outliers   :  156  ███████
  Status Issues       :  148  ███████
  Missing Fields      :  100  █████
=======================================================
```

---

## 📂 Excel Report Sheets

The generated `audit_report.xlsx` contains 7 sheets:

1. **Summary Dashboard** — KPI blocks + bar chart of issues by category
2. **All Flagged Records** — every flagged row with `error_type`, `error_detail`, `severity`
3. **HIGH Severity** — geocode and duplicate issues
4. **MEDIUM Severity** — address, duration, and status issues
5. **LOW Severity** — missing field issues
6. **Clean Records (Sample)** — first 2,000 records that passed all checks
7. **City Breakdown** — pivot table of flag counts per city

---

## 🧪 Running Tests

```bash
pip install pytest
python -m pytest tests/ -v
```

Expected output: **20+ tests, all passing.**

---

## 🔧 Tech Stack

| Tool | Purpose |
|------|---------|
| Python 3.9+ | Core language |
| pandas | Data ingestion, transformation, and filtering |
| openpyxl | Excel report generation with charts and formatting |
| pytest | Unit testing |

---

## 💡 Real-World Relevance

This project mirrors workflows used in operations quality teams:

- **SOP-driven checks** — each audit rule corresponds to a real-world validation SOP
- **Severity-based escalation** — HIGH issues surface first, LOW issues are tracked separately
- **Structured record-keeping** — every flagged record has an error type, detail, and severity column for downstream action
- **Excel reporting** — designed for non-technical stakeholders to open and review immediately
- **Scalable pipeline** — modular check functions can be added or removed without changing the core engine

---

## 👤 Author

**Maddisetty Bhagya Sri**  
B.Tech CSE (AI/ML) — Mohan Babu University  
[LinkedIn](https://www.linkedin.com/in/bhagya-sri-maddisetty-064102305/) | [GitHub](https://github.com/Bhagyasrimaddisetty)
