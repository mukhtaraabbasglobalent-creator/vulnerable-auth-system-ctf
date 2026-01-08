---

## Vulnerability 3: Hardcoded Credentials
- **CWE:** 798
- **Severity:** High

### Description
User credentials are hardcoded directly into the application source code.

### Impact
Anyone with access to the source code can obtain valid login credentials.

### Mitigation
- Store credentials securely in a database
- Never hardcode secrets or passwords
