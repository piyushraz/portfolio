import React, { useEffect, useRef } from 'react';
import './background.css';

const PALETTE = {
    kw:    '#c586c0',
    kw2:   '#569cd6',
    fn:    '#dcdcaa',
    cls:   '#4ec9b0',
    str:   '#ce9178',
    num:   '#b5cea8',
    com:   '#6a9955',
    var:   '#9cdcfe',
    prop:  '#9cdcfe',
    punct: '#d4d4d4',
    op:    '#d4d4d4',
};

const SNIPPETS = [
    [['const ','kw'],['agent','var'],[' = ','op'],['new ','kw'],['Agent','cls'],['({ ','punct'],['model','prop'],[': ','punct'],["'claude-opus-4-7'",'str'],[' });','punct']],
    [['async ','kw'],['function ','kw'],['retrieve','fn'],['(','punct'],['query','var'],[': ','punct'],['string','cls'],[') {','punct']],
    [['await ','kw'],['vectorStore.','var'],['similaritySearch','fn'],['(','punct'],['embedding','var'],[', ','punct'],['k','var'],[': ','punct'],['8','num'],[');','punct']],
    [['// ','com'],['route via A2A → MCP server → tool exec','com']],
    [['return ','kw'],['graph.','var'],['compile','fn'],['().','punct'],['invoke','fn'],['({ ','punct'],['messages','prop'],[' });','punct']],
    [['kubectl ','kw2'],['apply ','fn'],['-f ','op'],['mcp-server.yaml','str']],
    [['POST ','kw'],['/v1/chat/completions','fn'],[' → ','op'],['200','num'],[' OK','com']],
    [['if ','kw'],['(','punct'],['confidence','var'],[' < ','op'],['0.85','num'],[') ','punct'],['fallbackToLLM','fn'],['();','punct']],
    [['from ','kw'],['langgraph.graph ','var'],['import ','kw'],['StateGraph','cls']],
    [['docker ','kw2'],['run ','fn'],['-p ','op'],['8080:8080 ','num'],['concert/agent','str']],
    [['for ','kw'],['(const ','kw'],['doc ','var'],['of ','kw'],['docs','var'],[') ','punct'],['await ','kw'],['index','fn'],['(','punct'],['doc','var'],[');','punct']],
    [['type ','kw'],['ToolCall ','cls'],['= ','op'],['{ ','punct'],['name','prop'],[': ','punct'],['string','cls'],['; ','punct'],['args','prop'],[': ','punct'],['unknown ','cls'],['};','punct']],
    [['# ','com'],['orchestrate multi-agent workflow','com']],
    [['const ','kw'],['mcpServer','var'],[' = ','op'],['await ','kw'],['startServer','fn'],['({ ','punct'],['port','prop'],[': ','punct'],['3000','num'],[' });','punct']],
    [['terraform ','kw2'],['apply ','fn'],['-auto-approve','op']],
    [['interface ','kw'],['Agent ','cls'],['{ ','punct'],['name','prop'],[': ','punct'],['string','cls'],['; ','punct'],['tools','prop'],[': ','punct'],['Tool[]','cls'],['; }','punct']],
    [['true','kw'],[', ','punct'],['false','kw'],[', ','punct'],['null','kw'],[', ','punct'],['undefined','kw']],
    [['try ','kw'],['{ ','punct'],['await ','kw'],['mcp.','var'],['callTool','fn'],['(','punct'],['name','var'],[', ','punct'],['args','var'],[') }','punct']],
    [['catch ','kw'],['(','punct'],['err','var'],[': ','punct'],['Error','cls'],[') {','punct']],
    [['embeddings','var'],[' = ','op'],['openai.','var'],['embed','fn'],['(','punct'],['"text-3-large"','str'],[')','punct']],
    [['SELECT ','kw'],['user_id','var'],[', ','punct'],['SUM','fn'],['(','punct'],['amount','var'],[') ','punct'],['FROM ','kw'],['orders','var']],
    [['useEffect','fn'],['(() => {','punct'],[' fetch','fn'],['(','punct'],['url','var'],[') ','punct'],['}, []);','punct']],
    [['<','punct'],['Component ','cls'],['onClick','prop'],['={','punct'],['handler','fn'],['} />','punct']],
    [['def ','kw'],['plan_step','fn'],['(','punct'],['state','var'],['):','punct'],[' return ','kw'],['llm.invoke','fn'],['(','punct'],['state','var'],[')','punct']],
    [['oc ','kw2'],['login ','fn'],['--token ','op'],['$TOKEN','var']],
    [['npm ','kw2'],['run ','fn'],['build','str'],[' && ','op'],['npm ','kw2'],['test','fn']],
    [['git ','kw2'],['commit ','fn'],['-m ','op'],['"feat: a2a router"','str']],
    [['pip ','kw2'],['install ','fn'],['langgraph ','str'],['langchain-anthropic','str']],
    [['{ ','punct'],['"role"','str'],[': ','punct'],['"assistant"','str'],[', ','punct'],['"content"','str'],[': ','punct'],['"..."','str'],[' }','punct']],
    [['Promise.','var'],['all','fn'],['([','punct'],['fetch','fn'],['(a),','punct'],[' fetch','fn'],['(b)','punct'],['])','punct']],
];

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const reduced = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let animationId;
        let rows = [];
        const isMobile = window.matchMedia &&
            window.matchMedia('(max-width: 768px)').matches;
        const isCoarsePointer = window.matchMedia &&
            window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        const lowPower = isMobile || isCoarsePointer;

        let dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, lowPower ? 1.5 : 2));
        const fontSize = lowPower ? 12 : 14;
        const lineHeight = lowPower ? 30 : 22;

        const fontStr = `${fontSize}px "JetBrains Mono", "Fira Code", "Cascadia Code", "Consolas", monospace`;

        const buildLine = () => {
            const n = lowPower ? (1 + Math.floor(Math.random() * 2)) : (2 + Math.floor(Math.random() * 3));
            const parts = [];
            for (let i = 0; i < n; i++) {
                const s = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
                for (const tok of s) parts.push({ text: tok[0], color: tok[1] });
                if (i < n - 1) parts.push({ text: '     ', color: 'punct' });
            }
            ctx.font = fontStr;
            let total = 0;
            for (const p of parts) {
                p.width = ctx.measureText(p.text).width;
                p.offset = total;
                total += p.width;
            }
            return { parts, total };
        };

        const newRow = (y, layer, w) => {
            const dir = Math.random() < 0.5 ? 1 : -1;
            const speedRange = layer === 0
                ? [2.2, 4.0]   // foreground, fast
                : layer === 1
                ? [1.2, 2.4]   // mid
                : [0.4, 1.0];  // background, slow
            const alphaRange = layer === 0 ? [0.78, 0.95]
                            : layer === 1 ? [0.45, 0.7]
                                          : [0.18, 0.32];
            const line = buildLine();
            const speed = (speedRange[0] + Math.random() * (speedRange[1] - speedRange[0])) * dir;
            return {
                y,
                line,
                speed,
                x: dir > 0 ? -line.total - Math.random() * w : w + Math.random() * w,
                alpha: alphaRange[0] + Math.random() * (alphaRange[1] - alphaRange[0]),
                layer,
            };
        };

        const resize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const rowCount = Math.ceil(h / lineHeight) + 2;
            rows = [];
            for (let i = 0; i < rowCount; i++) {
                const layer = i % 3;
                const y = i * lineHeight - 6 + (Math.random() * 4 - 2);
                rows.push(newRow(y, layer, w));
            }
        };

        resize();
        window.addEventListener('resize', resize);

        const hexToRgba = (hex, alpha) => {
            const v = hex.replace('#', '');
            const r = parseInt(v.slice(0, 2), 16);
            const g = parseInt(v.slice(2, 4), 16);
            const b = parseInt(v.slice(4, 6), 16);
            return `rgba(${r},${g},${b},${alpha})`;
        };

        // pre-resolve fillStyle strings per (color, alphaBucket)
        const colorCache = new Map();
        const styleFor = (color, alpha) => {
            const bucket = Math.round(alpha * 20);
            const key = color + '_' + bucket;
            let v = colorCache.get(key);
            if (!v) {
                v = hexToRgba(PALETTE[color] || PALETTE.punct, bucket / 20);
                colorCache.set(key, v);
            }
            return v;
        };

        let last = 0;
        const targetFps = reduced ? 12 : lowPower ? 22 : 60;
        const interval = 1000 / targetFps;

        const draw = (now) => {
            animationId = requestAnimationFrame(draw);
            if (now - last < interval) return;
            const dt = last === 0 ? interval : now - last;
            last = now;

            const w = window.innerWidth;
            const h = window.innerHeight;

            ctx.clearRect(0, 0, w, h);
            ctx.font = fontStr;
            ctx.textBaseline = 'top';

            // 60fps reference; scale movement by elapsed time
            const timeScale = Math.min(2.5, dt / (1000 / 60));

            for (let i = 0; i < rows.length; i++) {
                const r = rows[i];
                const baseX = r.x;
                const parts = r.line.parts;
                for (let j = 0; j < parts.length; j++) {
                    const p = parts[j];
                    ctx.fillStyle = styleFor(p.color, r.alpha);
                    ctx.fillText(p.text, baseX + p.offset, r.y);
                }

                r.x += r.speed * timeScale;

                if (r.speed > 0 && r.x > w + 20) {
                    rows[i] = newRow(r.y, r.layer, w);
                    rows[i].x = -rows[i].line.total - Math.random() * 80;
                } else if (r.speed < 0 && r.x + r.line.total < -20) {
                    rows[i] = newRow(r.y, r.layer, w);
                    rows[i].x = w + Math.random() * 80;
                }
            }
        };

        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="background-full">
            <canvas ref={canvasRef} className="background-canvas" aria-hidden="true"></canvas>
            <div className="background-grid" aria-hidden="true"></div>
            <div className="background-glow" aria-hidden="true"></div>
            <div className="background-vignette" aria-hidden="true"></div>
        </div>
    );
};

export default Background;
