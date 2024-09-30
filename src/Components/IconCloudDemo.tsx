import IconCloud from "./Magic-UI/IconCloud";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "bootstrap",
    "tailwindcss",
    "nodedotjs",
    "nginx",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "kubernetes",
    "c",
    "cplusplus",
    "csharp",
    "python",
    "datadog",
    "apachekafka",
    "redis",
    "php",
    "laravel",
    "dotnet",
    "mysql",
    "mongodb",
    "go",
    "azure"
];

export function IconCloudDemo() {
    return (
        <div className="flex size-full max-w-lg items-center justify-center bg-background">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
