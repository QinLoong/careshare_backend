@param {string} fieldName

function bigCamelCase(fieldName) {
    const stringPices = fieldName.split('_');
    const bigCamelCaseStringPices = stringPices.map((s) => s.substring(0, 1).toUpperCase() + s.substring(1));
    return bigCamelCaseStringPices.join('');
}

module.exports = {
    description: '生成CRUD模版',
    prompts: [
      {
        type: 'input',
        name: 'tablePrefix',
        message: '请输入表前缀：',
      },
      {
        type: 'input',
        name: 'tables',
        message: '请输入表名（多表以逗号隔开）：',
        validate: (v) => (!v || v.trim() === '' ? '表名不能为空' : true),
      },
    ],
    actions: (data) => {