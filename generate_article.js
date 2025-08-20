// 文章生成脚本
// 将 raw_article 文件夹中的 markdown 文件转换为 HTML 文章

const fs = require('fs');
const path = require('path');

// 文章模板
const articleTemplate = (title, meta, content) => `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Kawakami Shiro</title>
    <style>
        :root {
            --radius: 18px;
            --shadow: 0 8px 30px rgba(0,0,0,0.06);
            --t: 360ms cubic-bezier(.2,.8,.2,1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: var(--text);
            background: linear-gradient(180deg, var(--grad1) 0%, var(--grad2) 100%);
            min-height: 100vh;
            transition: background var(--t), color var(--t);
        }

        /* 主题配色 */
        body.day-theme {
            --grad1: #f9e8ea;
            --grad2: #ffffff;
            --text: #1f2937;
            --muted: #6b7280;
            --card: #ffffff;
            --accent: #ef4444;
        }

        body.night-theme {
            --grad1: #e8f0fb;  /* 主界面默认蓝色渐变 */
            --grad2: #ffffff;
            --text: #1f2735;
            --muted: #5b6472;
            --card: #ffffff;
            --accent: #3b82f6;
        }

        .container {
            max-width: 860px;
            margin: 42px auto 96px;
            padding: 0 20px;
        }

        /* 文章头部 */
        .article-header {
            background: var(--card);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            padding: 24px;
            margin-bottom: 28px;
            border: 1px solid rgba(0,0,0,.06);
        }

        .article-title {
            font-size: 32px;
            font-weight: 800;
            color: var(--text);
            margin: 0 0 16px;
            line-height: 1.3;
        }

        .article-meta {
            display: flex;
            gap: 16px;
            margin-bottom: 16px;
            font-size: 14px;
            color: var(--muted);
            flex-wrap: wrap;
        }

        .article-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tag {
            background: var(--accent);
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
        }

        /* 文章内容 */
        .article-content {
            background: var(--card);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            padding: 28px;
            margin-bottom: 28px;
            border: 1px solid rgba(0,0,0,.06);
        }

        .article-content h2 {
            font-size: 24px;
            font-weight: 700;
            color: var(--text);
            margin: 32px 0 16px;
            padding-top: 16px;
            border-top: 1px solid rgba(0,0,0,.06);
        }

        .article-content h3 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text);
            margin: 24px 0 12px;
        }

        .article-content p {
            margin-bottom: 16px;
            line-height: 1.7;
            color: var(--text);
        }

        .article-content pre {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 16px;
            margin: 16px 0;
            overflow-x: auto;
            border: 1px solid rgba(0,0,0,.06);
        }

        .article-content code {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 14px;
            color: #e83e8c;
        }

        .article-content pre code {
            color: #333;
        }

        .article-content figure {
            margin: 24px 0;
            text-align: center;
        }

        .article-content img {
            max-width: 100%;
            border-radius: 12px;
            box-shadow: var(--shadow);
        }

        .article-content figcaption {
            margin-top: 8px;
            font-size: 14px;
            color: var(--muted);
            font-style: italic;
        }

        .article-content blockquote {
            border-left: 4px solid var(--accent);
            background: rgba(0,0,0,.02);
            padding: 16px 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }

        /* 文章底部 */
        .article-footer {
            background: var(--card);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            padding: 24px;
            border: 1px solid rgba(0,0,0,.06);
        }

        .article-navigation {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            gap: 16px;
        }

        .prev-article, .next-article {
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
            transition: color var(--t);
        }

        .prev-article:hover, .next-article:hover {
            color: var(--text);
        }

        .back-to-list {
            display: inline-block;
            color: var(--muted);
            text-decoration: none;
            font-weight: 500;
            transition: color var(--t);
        }

        .back-to-list:hover {
            color: var(--accent);
        }

        /* 返回主页按钮 */
        .back-home {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--accent);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: var(--shadow);
            transition: all var(--t);
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
        }

        .back-home:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        /* 响应式设计 */
        @media (max-width: 560px) {
            .container {
                padding: 16px;
            }
            
            .article-title {
                font-size: 24px;
            }
            
            .article-content {
                padding: 20px;
            }
            
            .article-navigation {
                flex-direction: column;
                align-items: center;
            }
            
            .back-home {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 16px;
            }
        }
    </style>
</head>
<body class="night-theme">
    <div class="container">
        <!-- 文章头部 -->
        <header class="article-header">
            <h1 class="article-title">${title}</h1>
            <div class="article-meta">
                <span class="article-date">${meta.date}</span>
                <span class="article-category">${meta.category}</span>
                <span class="article-read-time">${meta.readTime}</span>
            </div>
            <div class="article-tags">
                ${meta.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </header>

        <!-- 文章内容 -->
        <article class="article-content">
            ${content}
        </article>

        <!-- 文章底部 -->
        <footer class="article-footer">
            <div class="article-navigation">
                <a href="${meta.prevArticle || '#'}" class="prev-article">← 上一篇：${meta.prevTitle || '暂无'}</a>
                <a href="${meta.nextArticle || '#'}" class="next-article">下一篇：${meta.nextTitle || '暂无'} →</a>
            </div>
            <a href="../articles.html" class="back-to-list">← 返回文章列表</a>
        </footer>
    </div>

    <!-- 返回主页按钮 -->
    <button class="back-home" onclick="goHome()" title="返回主页">🏠</button>

    <script>
        // 返回主页
        function goHome() {
            window.location.href = '../index.html';
        }
    </script>
</body>
</html>`;

// 将 Markdown 转换为 HTML 的函数
function markdownToHtml(markdown) {
    let html = markdown;
    
    // 转换标题
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // 转换段落
    html = html.replace(/^(?!<[h|ul|ol|li|blockquote|pre|code]).*$/gim, '<p>$&</p>');
    
    // 转换代码块
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
    
    // 转换行内代码
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // 转换列表
    html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>');
    
    // 转换链接
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // 转换图片
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure><img src="$2" alt="$1"><figcaption>$1</figcaption></figure>');
    
    // 转换引用
    html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // 转换粗体和斜体
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // 清理空段落
    html = html.replace(/<p><\/p>/g, '');
    
    return html;
}

// 解析 YAML 元数据
function parseYamlFrontMatter(content) {
    // 更宽松的 YAML 匹配，支持不同的换行符
    const yamlMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!yamlMatch) {
        console.log('❌ 未找到 YAML 元数据分隔符');
        return null;
    }
    
    const yamlContent = yamlMatch[1];
    const metadata = {};
    
    yamlContent.split('\n').forEach(line => {
        line = line.trim();
        if (line === '') return; // 跳过空行
        
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            
            // 处理带引号的值
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            
            // 处理数组（tags）
            if (key === 'tags' && value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(tag => tag.trim().replace(/"/g, ''));
            }
            
            metadata[key] = value;
            console.log(`📝 解析元数据: ${key} = ${JSON.stringify(value)}`);
        }
    });
    
    // 验证必要字段
    if (!metadata.title) {
        console.log('❌ 缺少必要字段: title');
        return null;
    }
    
    console.log('✅ 元数据解析成功:', Object.keys(metadata));
    
    return {
        metadata,
        content: content.substring(yamlMatch[0].length)
    };
}

// 扫描 raw_article 目录，自动发现文章
function scanArticles() {
    const rawArticleDir = path.join(__dirname, 'raw_article');
    const articles = [];
    
    if (!fs.existsSync(rawArticleDir)) {
        console.log('📁 raw_article 目录不存在，创建中...');
        fs.mkdirSync(rawArticleDir, { recursive: true });
        return articles;
    }
    
    // 遍历所有分类目录
    const categories = fs.readdirSync(rawArticleDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    
    categories.forEach(category => {
        const categoryDir = path.join(rawArticleDir, category);
        const files = fs.readdirSync(categoryDir)
            .filter(file => file.endsWith('.md'))
            .sort(); // 按文件名排序
        
        files.forEach((file, index) => {
            const filePath = path.join(categoryDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const parsed = parseYamlFrontMatter(content);
            
            if (parsed && parsed.metadata.title) {
                // 生成文件名（三位数字编号）
                const fileNumber = String(index + 1).padStart(3, '0');
                const htmlFile = `${fileNumber}.html`;
                
                articles.push({
                    ...parsed.metadata,
                    id: parseInt(parsed.metadata.id) || (index + 1),
                    file: htmlFile,
                    rawFile: `raw_article/${category}/${file}`,
                    category: category
                });
            } else {
                console.log(`⚠️  文件 ${file} 缺少必要的元数据`);
            }
        });
    });
    
    // 按 ID 排序
    articles.sort((a, b) => a.id - b.id);
    
    return articles;
}

// 主函数：生成所有文章
function generateAllArticles() {
    console.log('🚀 开始生成文章...');
    
    // 确保输出目录存在
    const outputDir = path.join(__dirname, 'article');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log('📁 创建 article 目录');
    }
    
    // 自动扫描文章
    const articles = scanArticles();
    
    if (articles.length === 0) {
        console.log('📝 没有找到任何文章文件');
        return;
    }
    
    console.log(`📚 发现 ${articles.length} 篇文章`);
    
    // 生成每篇文章
    articles.forEach((article, index) => {
        const rawFilePath = path.join(__dirname, article.rawFile);
        const outputFilePath = path.join(outputDir, article.file);
        
        console.log(`📝 处理文章: ${article.title}`);
        
        // 读取 Markdown 内容
        const markdownContent = fs.readFileSync(rawFilePath, 'utf8');
        const parsed = parseYamlFrontMatter(markdownContent);
        
        if (!parsed) {
            console.log(`⚠️  文件 ${article.rawFile} 格式错误`);
            return;
        }
        
        // 转换为 HTML
        const htmlContent = markdownToHtml(parsed.content);
        
        // 准备元数据
        const meta = {
            date: article.date,
            category: getCategoryName(article.category),
            readTime: article.readTime,
            tags: article.tags,
            prevArticle: index > 0 ? articles[index - 1].file : '#',
            prevTitle: index > 0 ? articles[index - 1].title : '',
            nextArticle: index < articles.length - 1 ? articles[index + 1].file : '#',
            nextTitle: index < articles.length - 1 ? articles[index + 1].title : ''
        };
        
        // 生成完整 HTML
        const fullHtml = articleTemplate(article.title, meta, htmlContent);
        
        // 写入文件
        fs.writeFileSync(outputFilePath, fullHtml, 'utf8');
        console.log(`✅ 生成文章: ${article.file}`);
    });
    
    // 生成 articles.js 配置文件
    generateArticlesConfig(articles);
    
    console.log('🎉 文章生成完成！');
}

// 获取分类名称
function getCategoryName(categoryKey) {
    const categories = {
        tech: "技术文章",
        food: "美食研究",
        life: "生活随笔",
        game: "游戏相关"
    };
    return categories[categoryKey] || categoryKey;
}

// 生成 articles.js 配置文件
function generateArticlesConfig(articles) {
    console.log('📝 生成 articles.js 配置文件...');
    
    // 收集所有分类
    const categories = {};
    articles.forEach(article => {
        if (!categories[article.category]) {
            const categoryNames = {
                tech: "技术文章",
                food: "美食研究",
                life: "生活随笔",
                game: "游戏相关"
            };
            
            categories[article.category] = {
                name: categoryNames[article.category] || article.category,
                description: `${categoryNames[article.category] || article.category}相关文章`,
                icon: getCategoryIcon(article.category)
            };
        }
    });
    
    // 生成配置文件内容
    const configContent = `// 文章配置文件 - 自动生成，请勿手动编辑
// 修改后保存文件，网站会自动更新

const articlesConfig = {
  // 文章分类配置
  categories: ${JSON.stringify(categories, null, 2)},

  // 文章数据 - 从 raw_article 文件夹的 markdown 文件生成
  articles: ${JSON.stringify(articles, null, 2)},

  // 网站信息
  siteInfo: {
    title: "文章目录 - Kawakami Shiro",
    author: "渊",
    avatar: "avatar_study.jpg",
    nickname: "USTC, baiyanchi1220@gmail.com",
    description: "技术分享、美食探索、生活感悟、游戏制作"
  },

  // 主题配置
  themes: {
    day: {
      grad1: '#f9e8ea',  // 浅红色渐变
      grad2: '#ffffff',
      text: '#1f2937',
      muted: '#6b7280',
      card: '#ffffff',
      accent: '#ef4444'
    },
    night: {
      grad1: '#e8f0fb',  // 浅蓝色渐变（主界面默认）
      grad2: '#ffffff',
      text: '#1f2735',
      muted: '#5b6472',
      card: '#ffffff',
      accent: '#3b82f6'
    }
  }
};

// 导出配置（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = articlesConfig;
}`;
    
    // 写入配置文件
    const configPath = path.join(__dirname, 'articles.js');
    fs.writeFileSync(configPath, configContent, 'utf8');
    console.log('✅ 生成 articles.js 配置文件');
}

// 获取分类图标
function getCategoryIcon(category) {
    const icons = {
        tech: "💻",
        food: "🍜",
        life: "📝",
        game: "🎮"
    };
    return icons[category] || "📄";
}

// 如果直接运行此脚本
if (require.main === module) {
    generateAllArticles();
}
