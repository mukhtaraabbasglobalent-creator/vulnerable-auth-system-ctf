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
---

## Remediation: Secure Password Handling

### Improvements Implemented
- Replaced plain-text passwords with bcrypt hashing
- Secure password comparison using bcrypt.compare()
- Removed hardcoded plain-text credentials

### Security Benefits
- Prevents password disclosure if database is compromised
- Protects against rainbow table attacks
- Aligns with OWASP authentication best practices
