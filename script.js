const sqlQuery = document.getElementById('sql-query');
const newsqlQuery = document.getElementById('new-sql-query');
sqlQuery.addEventListener('keyup', handleQueryText);

newsqlQuery.addEventListener('click', handleQueryClipboard);
newsqlQuery.addEventListener('focus', handleQueryClipboard);

const regxp2 = /(\bSELECT\b)|(\bFROM\b)|(\bWITH\b)|(\bNOLOCK\b)|(\bINNER JOIN\b)|(\bON\b)|(\bWHERE\b)|(\bAND\b)|(\bOR\b)/gi;
const regxp = /\b(ADD)\b|\b(ADD CONSTRAINT)\b|\b(ALTER)\b|\b(ALTER COLUMN)\b|\b(ALTER TABLE)\b|\b(ALL)\b|\b(AND)\b|\b(ANY)\b|\b(AS)\b|\b(ASC)\b|\b(BACKUP DATABASE)\b|\b(BETWEEN)\b|\b(CASE)\b|\b(CHECK)\b|\b(COLUMN)\b|\b(CONSTRAINT)\b|\b(CREATE)\b|\b(CREATE DATABASE)\b|\b(CREATE INDEX)\b|\b(CREATE OR REPLACE VIEW)\b|\b(CREATE TABLE)\b|\b(CREATE PROCEDURE)\b|\b(CREATE UNIQUE INDEX)\b|\b(CREATE VIEW)\b|\b(DATABASE)\b|\b(DEFAULT)\b|\b(DELETE)\b|\b(DESC)\b|\b(DISTINCT)\b|\b(DROP)\b|\b(DROP COLUMN)\b|\b(DROP CONSTRAINT)\b|\b(DROP DATABASE)\b|\b(DROP DEFAULT)\b|\b(DROP INDEX)\b|\b(DROP TABLE)\b|\b(DROP VIEW)\b|\b(EXEC)\b|\b(EXISTS)\b|\b(FOREIGN KEY)\b|\b(FROM)\b|(WITH\s?\(NOLOCK\))|\b(FULL OUTER JOIN)\b|\b(GROUP BY)\b|\b(HAVING)\b|\b(IN)\b|\b(INDEX)\b|\b(INNER JOIN)\b|\b(INSERT INTO)\b|\b(INSERT INTO SELECT)\b|\b(IS NULL)\b|\b(IS NOT NULL)\b|\b(JOIN)\b|\b(LEFT JOIN)\b|\b(LIKE)\b|\b(LIMIT)\b|\b(NOT)\b|\b(NOT NULL)\b|\b(OR)\b|\b(ORDER BY)\b|\b(OUTER JOIN)\b|\b(PRIMARY KEY)\b|\b(PROCEDURE)\b|\b(RIGHT JOIN)\b|\b(ROWNUM)\b|\b(SELECT)\b|\b(SELECT DISTINCT)\b|\b(SELECT INTO)\b|\b(SELECT TOP)\b|\b(SET)\b|\b(TABLE)\b|\b(TOP)\b|\b(TRUNCATE TABLE)\b|\b(UNION)\b|\b(UNION ALL)\b|\b(UNIQUE)\b|\b(UPDATE)\b|\b(VALUES)\b|\b(VIEW)\b|\b(WHERE)\b|\b(ASCII)\b|\b(CHAR)\b|\b(CHARINDEX)\b|\b(CONCAT)\b|\b(CONCAT_WS)\b|\b(DATALENGTH)\b|\b(DIFFERENCE)\b|\b(FORMAT)\b|\b(LEFT)\b|\b(LEN)\b|\b(LOWER)\b|\b(LTRIM)\b|\b(NCHAR)\b|\b(PATINDEX)\b|\b(QUOTENAME)\b|\b(REPLACE)\b|\b(REPLICATE)\b|\b(REVERSE)\b|\b(RIGHT)\b|\b(RTRIM)\b|\b(SOUNDEX)\b|\b(SPACE)\b|\b(STR)\b|\b(STUFF)\b|\b(SUBSTRING)\b|\b(TRANSLATE)\b|\b(TRIM)\b|\b(UNICODE)\b|\b(UPPER)\b|\b(ABS)\b|\b(ACOS)\b|\b(ASIN)\b|\b(ATAN)\b|\b(ATN2)\b|\b(AVG)\b|\b(CEILING)\b|\b(COUNT)\b|\b(COS)\b|\b(COT)\b|\b(DEGREES)\b|\b(EXP)\b|\b(FLOOR)\b|\b(LOG)\b|\b(LOG10)\b|\b(MAX)\b|\b(MIN)\b|\b(PI)\b|\b(POWER)\b|\b(RADIANS)\b|\b(RAND)\b|\b(ROUND)\b|\b(SIGN)\b|\b(SIN)\b|\b(SQRT)\b|\b(SQUARE)\b|\b(SUM)\b|\b(TAN)\b|\b(CURRENT_TIMESTAMP)\b|\b(DATEADD)\b|\b(DATEDIFF)\b|\b(DATEFROMPARTS)\b|\b(DATENAME)\b|\b(DATEPART)\b|\b(DAY)\b|\b(GETDATE)\b|\b(GETUTCDATE)\b|\b(ISDATE)\b|\b(MONTH)\b|\b(SYSDATETIME)\b|\b(YEAR)\b|\b(CAST)\b|\b(COALESCE)\b|\b(CONVERT)\b|\b(CURRENT_USER)\b|\b(IIF)\b|\b(ISNULL)\b|\b(ISNUMERIC)\b|\b(NULLIF)\b|\b(SESSION_USER)\b|\b(SESSIONPROPERTY)\b|\b(SYSTEM_USER)\b|\b(USER_NAME)\b/gi;

function handleQueryText() {
    let query = this.value;
    const sqlWords = query.match(regxp);
    if (sqlWords) sqlWords.forEach(word => query = query.replace(word, word.toUpperCase()));
    newsqlQuery.value = query;
}

function handleQueryClipboard() {
    this.select();
    document.execCommand('copy');
}