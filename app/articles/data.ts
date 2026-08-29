export interface ArticleItem {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    category: string;
    categoryColor: string;
    summary: string;
    content: {
        heading: string;
        body: string;
        code?: string;
        codeLang?: string;
    }[];
}

export const articles: ArticleItem[] = [
    {
        slug: 'oracle-apex-rest-api-guide',
        title: 'Building Secure REST APIs in Oracle APEX: A Practical Guide',
        date: 'Aug 12, 2026',
        readTime: '8 min read',
        category: 'Oracle APEX',
        categoryColor: 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/60',
        summary: 'How to design, authenticate, and optimize REST Web Source modules in Oracle APEX — including OAuth2 token management and rate limiting strategies for high-traffic ERP APIs.',
        content: [
            {
                heading: 'Why REST in Oracle APEX?',
                body: 'Modern enterprise systems rarely operate in isolation. In pharmaceutical supply chains and ERP deployments, Oracle APEX serves as both a consumer of external microservices and a provider of secure endpoints for automated warehousing, third-party logistics (3PL), and mobile apps.',
            },
            {
                heading: '1. Designing RESTful Web Services via ORDS',
                body: 'Oracle REST Data Services (ORDS) turns the Oracle Database into a first-class REST API engine. When exposing stored procedures or queries, keep your SQL queries declarative and use pagination parameters (:page, :limit) to safeguard database memory buffers.',
                code: `-- Example ORDS Module Handler Definition
BEGIN
  ORDS.DEFINE_HANDLER(
    p_module_name    => 'erp.inventory',
    p_pattern        => 'batches/:item_id',
    p_method         => 'GET',
    p_source_type    => ORDS.SOURCE_TYPE_COLLECTION_FEED,
    p_source         => 'SELECT batch_no, expiry_date, quantity 
                         FROM pharma_inventory 
                         WHERE item_id = :item_id 
                         AND status = ''ACTIVE''',
    p_items_per_page => 50
  );
  COMMIT;
END;`,
                codeLang: 'sql'
            },
            {
                heading: '2. Securing Endpoints with OAuth2 Client Credentials',
                body: 'Never use basic authentication in production. Configure ORDS OAuth2 client credentials grant flow. Generate client IDs and secrets for external partners, and bind OAuth privileges directly to module URIs.',
            },
            {
                heading: '3. Handling High-Volume JSON Payloads in APEX',
                body: 'When ingesting bulk batch reports from external systems, avoid standard string concatenation. Use APEX_JSON and CLOB streaming with PL/SQL JSON_TABLE to parse thousands of records in sub-second time without exhausting the PGA memory.',
                code: `-- Parsing incoming bulk JSON in a PL/SQL REST Handler
DECLARE
  l_clob CLOB := :body;
BEGIN
  FOR r IN (
    SELECT *
    FROM JSON_TABLE(l_clob, '$.items[*]'
      COLUMNS (
        sku          VARCHAR2(50)  PATH '$.sku',
        lot_number   VARCHAR2(50)  PATH '$.lotNumber',
        received_qty NUMBER        PATH '$.qty',
        mfg_date     DATE          PATH '$.mfgDate'
      )
    )
  ) LOOP
    pkg_inventory_inbound.process_item(
      p_sku      => r.sku,
      p_lot      => r.lot_number,
      p_qty      => r.received_qty,
      p_mfg_date => r.mfg_date
    );
  END LOOP;
END;`,
                codeLang: 'sql'
            },
            {
                heading: 'Key Takeaways & Production Checklist',
                body: 'Always enforce validation before writing to core transaction tables, log API request signatures to an audit table with sys_guid(), and establish index coverage over query filters.'
            }
        ]
    },
    {
        slug: 'plsql-query-optimization',
        title: 'PL/SQL Query Optimization: From 30s to 0.3s — Real Case Studies',
        date: 'Jun 24, 2026',
        readTime: '12 min read',
        category: 'PL/SQL',
        categoryColor: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/60',
        summary: 'Practical techniques I used to reduce query execution times by 99x on a 4000-concurrent-user ERP system — covering index strategies, partition pruning, and bulk collect patterns.',
        content: [
            {
                heading: 'The Challenge: 30-Second Reporting Bottlenecks',
                body: 'On an enterprise pharmaceutical ERP supporting over 4,000 active users, daily sales dispatch reports began hitting the 30-second mark during peak closing hours. The underlying query joined 8 large tables across 15+ million rows without composite index alignment.'
            },
            {
                heading: '1. Diagnosing with Real-Time SQL Monitoring',
                body: 'Using DBMS_SQLTUNE and V$SQL_PLAN_MONITOR, we identified massive Full Table Scans (FTS) caused by implicit date casting inside WHERE clauses, as well as Cartesian join artifacts on nested subqueries.'
            },
            {
                heading: '2. Eliminating Row-by-Row Cursor Processing',
                body: 'The legacy codebase was using "slow-by-slow" cursor FOR loops to calculate inventory reorder thresholds. Refactoring to BULK COLLECT with FORALL statements reduced context switching between the PL/SQL engine and SQL engine by 98%.',
                code: `-- Before: Row-by-row (slow)
FOR rec IN c_orders LOOP
  UPDATE sales_summary SET processed = 'Y' WHERE order_id = rec.order_id;
END LOOP;

-- After: Bulk Processing with FORALL (fast)
DECLARE
  TYPE t_order_ids IS TABLE OF sales_orders.order_id%TYPE;
  l_ids t_order_ids;
BEGIN
  SELECT order_id BULK COLLECT INTO l_ids
  FROM sales_orders
  WHERE status = 'PENDING'
  LIMIT 5000;

  FORALL i IN 1..l_ids.COUNT
    UPDATE sales_summary 
    SET processed = 'Y', updated_at = SYSDATE 
    WHERE order_id = l_ids(i);
  COMMIT;
END;`,
                codeLang: 'sql'
            },
            {
                heading: '3. Partition Pruning & Functional Indexes',
                body: "We partitioned the transaction ledger by TRUNC(transaction_date, 'MM') and created composite B-tree indexes containing status, warehouse_id, and creation_date. Query time dropped from 31.4s to 0.28s."
            }
        ]
    },
    {
        slug: 'apex-erp-architecture',
        title: 'Designing Modular ERP Architecture with Oracle APEX Page Groups',
        date: 'May 3, 2026',
        readTime: '10 min read',
        category: 'Architecture',
        categoryColor: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-900/60',
        summary: 'How to structure large Oracle APEX applications across multiple page groups, shared components, and application items to keep your ERP codebase maintainable as it grows.',
        content: [
            {
                heading: 'The Monolith Trap in Rapid Application Development',
                body: 'When building an ERP in Oracle APEX, it is easy to accumulate 300+ pages in a single application without modular boundaries. This makes deployment riskier and teamwork harder.'
            },
            {
                heading: 'Modular APEX Patterns',
                body: 'Break the ERP into core domains: Master Data, Procurement, Sales Order Processing, Warehouse Logistics, and Financial Reporting. Use Subscribed Lists and Shared Application Components across sub-apps.'
            },
            {
                heading: 'Centralized Package API Layer',
                body: 'Keep zero business logic in APEX page processes. Every button or dynamic action should invoke a dedicated package procedure (e.g., pkg_sales_order_api.approve_order). This makes test automation and API reuse straightforward.'
            }
        ]
    },
    {
        slug: 'json-parsing-plsql',
        title: 'Parsing Complex Nested JSON in Oracle PL/SQL Without Third-Party Libraries',
        date: 'Mar 18, 2026',
        readTime: '7 min read',
        category: 'PL/SQL',
        categoryColor: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/60',
        summary: 'Using APEX_JSON, JSON_TABLE, and JSON_VALUE natively to parse deeply nested API responses in PL/SQL — with real examples from a pharmaceutical ERP integration.',
        content: [
            {
                heading: 'Native Oracle JSON Capabilities',
                body: 'Since Oracle Database 12c Release 2 and 19c, JSON is a native data type in SQL. You do not need third-party Java libraries or external utilities to query, validate, and aggregate nested JSON structures.'
            },
            {
                heading: 'JSON_TABLE with Nested Arrays',
                body: 'JSON_TABLE allows flattening complex tree structures into standard relational rows and columns that can be joined with existing database tables.',
                code: `SELECT m.order_id, d.item_code, d.qty, d.unit_price
FROM orders_raw r,
JSON_TABLE(r.json_payload, '$'
  COLUMNS (
    order_id VARCHAR2(30) PATH '$.orderId',
    NESTED PATH '$.lineItems[*]'
      COLUMNS (
        item_code  VARCHAR2(30) PATH '$.code',
        qty        NUMBER       PATH '$.quantity',
        unit_price NUMBER       PATH '$.price'
      )
  )
) m,
JSON_TABLE(r.json_payload, '$.lineItems[*]'
  COLUMNS (
    item_code  VARCHAR2(30) PATH '$.code',
    qty        NUMBER       PATH '$.quantity',
    unit_price NUMBER       PATH '$.price'
  )
) d;`,
                codeLang: 'sql'
            }
        ]
    }
];

export const articlesMap: Record<string, ArticleItem> = articles.reduce((acc, a) => {
    acc[a.slug] = a;
    return acc;
}, {} as Record<string, ArticleItem>);
