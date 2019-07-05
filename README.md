## npm 发包测试
npm install

npm build

npm login

npm publish .

## 版本号
通过npm version <update_type>自动改变版本
update_type为patch, minor, or major其中之一，分别表示补丁，小改，大改

如:
当前版本为1.0.0
执行以下的其中一条命令，版本号就会package.json的version自动变。
npm version patch
1.0.1

npm version minor
1.1.0

npm version major
2.0.0

对于"version":"x.y.z"
1. 修复bug,小改动，增加z
2. 增加了新特性，但仍能向后兼容，增加y
3. 有很大的改动，无法向后兼容,增加x

在npm仓库里有了包的情况下，发布包，需要变化版本号，否则不能提交上去。
会提示 You cannot publish over the previously published versions。

## 撤销包
npm unpublish 包名

如果撤销包的提示 using --force I sure hope you know what you are doing.

加上--force

npm unpublish 包名 --force

1. 根据规范，只有在发包的24小时内才允许撤销发布的包（ unpublish is only allowed with versions published in the last 24 hours）
2. 即使你撤销了发布的包，发包的时候也不能再和被撤销的包的名称和版本重复了（即不能名称相同，版本相同，因为这两者构成的唯一标识已经被“占用”了）



