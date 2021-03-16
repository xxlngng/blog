## siftData

**简要描述：**

- 一些列表查询的通用的筛选条件

**返回示例**

```
  {
    "resCode": "0",
    "resMsg": "",
    "resData": {
      "siftData": [
        {
          type: "text",        //文本输入
          key: "id",
          label: "账号",
          placeholder: "请输入账号",
          defaultValue: ""
        },
        {
          type: "date",        //时间选择
          key: "time",
          label: "选择日期",
          placeholder: "请选择日期",
          defaultValue: 1511605351000,
          min: null,
          max: null
        },
        {
          type: "bedate",        //开始和结束时间选择
          key: "beginTime,endTime",
          label: "过期时间",
          placeholder: "开始时间,结束时间",
          defaultValue: "1511605351000,1561605351000",
          min: null,
          max: null
        },
        {
          type: "select",        //下拉选择
          key: "from",
          label: "来源",
          placeholder: "请选择来源",
          defaultValue: "",
          data: [
            {
              value: "",
              label: "全部"
            },
            {
              value: "phone",
              label: "手机注册"
            },
            {
              value: "pc",
              label: "PC端注册"
            }
          ]
        }
      ]
    }
  }
```

**返回参数说明**

| 参数名   | 类型      | 说明                                     |
| -------- | --------- | ---------------------------------------- |
| siftData | List<Map> | 按顺序传入对应筛选框数组会在前台相应展示 |

## siftData-text（文本输入）

**简要描述：**

- siftData中的文本输入框

  ```
    {    "type": "text",    "key": "id",    "label": "账号",    "placeholder": "请输入账号",    "defaultValue": ""  }
  ```

  **参数说明**

| 参数名       | 类型   | 必填 | 默认值      | 说明                  |
| ------------ | ------ | ---- | ----------- | --------------------- |
| type         | string | 是   | text        |                       |
| key          | string | 是   | -           | 筛选条件中对应的key值 |
| label        | string | 否   | -           | 文本框的标题          |
| placeholder  | string | 否   | 请输入label | 文本框的展位提示符    |
| defaultValue | string | 否   | -           | 初始化的默认值        |

##vsiftData-date（日期选择）

**简要描述：**

- siftData中的时间选择器

  ```
    {    "type": "date",    "key": "time",    "label": "选择日期",    "placeholder": "请选择日期",    "defaultValue": 1511605351000,    "min": null,    "max": null  },
  ```

  **参数说明**

| 参数名       | 类型   | 必填 | 默认值     | 说明                  |
| ------------ | ------ | ---- | ---------- | --------------------- |
| type         | string | 是   | date       |                       |
| key          | string | 是   | -          | 筛选条件中对应的key值 |
| label        | string | 否   | -          | 文本框的标题          |
| placeholder  | string | 否   | 请选择日期 | 文本框的展位提示符    |
| defaultValue | 时间戳 | 否   | -          | 初始化的默认值        |
| min          | 时间戳 | 否   | -          | 限制选择最小时间      |
| max          | 时间戳 | 否   | -          | 限制选择最大时间      |

## siftData-bedate（开始结束日期选择）

**简要描述：**

- siftData中的带开始和结束时间的选择器

  ```
    {    "type": "bedate",    "key": "beginTime,endTime",    "label": "过期时间",    "placeholder": "开始时间,结束时间",    "defaultValue": "1511605351000,1561605351000",    "min": null,    "max": null  }
  ```

  **参数说明**

| 参数名       | 类型   | 必填 | 默认值            | 说明                                                         |
| ------------ | ------ | ---- | ----------------- | ------------------------------------------------------------ |
| type         | string | 是   | bedate            |                                                              |
| key          | string | 是   | -                 | 筛选条件中对应的key值，注意这里有2个值，用逗号隔开，第一个为开始时间的key，第二个为结束时间的key |
| label        | string | 否   | -                 | 文本框的标题                                                 |
| placeholder  | string | 否   | 开始时间,结束时间 | 文本框的展位提示符                                           |
| defaultValue | string | 否   | -                 | 初始化的默认值，用逗号隔开，第一个为开始时间，第二个为结束时间 |
| min          | 时间戳 | 否   | -                 | 限制选择最小时间                                             |
| max          | 时间戳 | 否   | -                 | 限制选择最大时间                                             |

## siftData-select（下拉选择器）

**简要描述：**

- siftData中的下拉选择器

  ```
    {
      type: "select",
      key: "from",
      label: "来源",
      placeholder: "请选择来源",
      defaultValue: "",
      data: [
        {
          value: "",
          label: "全部"
        },
        {
          value: "phone",
          label: "手机注册"
        },
        {
          value: "pc",
          label: "PC端注册"
        }
      ]
    }
  ```

  **参数说明**

| 参数名       | 类型      | 必填 | 默认值      | 说明                                                         |
| ------------ | --------- | ---- | ----------- | ------------------------------------------------------------ |
| type         | string    | 是   | select      |                                                              |
| key          | string    | 是   | -           | 筛选条件中对应的key值                                        |
| label        | string    | 否   | -           | 文本框的标题                                                 |
| placeholder  | string    | 否   | 请选择label | 文本框的展位提示符                                           |
| defaultValue | string    | 否   | -           | 初始化的默认值                                               |
| date         | List<Map> | 是   | -           | 下拉数组（value为选中的值，label为显示对应的下拉内容），PS:如果下拉中有全部选项请在data里自行添加 |

## siftData-selects（ 多选下拉选择器）

**简要描述：**

- siftData中的多选下拉选择器

  ```
   {
      type: "selects",
      key: "foots",
      label: "标题",
      placeholder: "请选择标题",
      defaultValue: [],
      data: [
        {
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }
      ]
    }
  ```

  **参数说明**

| 参数名       | 类型         | 必填 | 默认值      | 说明                                                         |
| ------------ | ------------ | ---- | ----------- | ------------------------------------------------------------ |
| type         | string       | 是   | selects     |                                                              |
| key          | string       | 是   | -           | 筛选条件中对应的key值，多选是用逗号隔开的value字符串集合（非数组形式） |
| label        | string       | 否   | -           | 文本框的标题                                                 |
| placeholder  | string       | 否   | 请选择label | 文本框的展位提示符                                           |
| defaultValue | List<string> | 否   | -           | 初始化选中的值，为对应value的字符串数组                      |
| date         | List<Map>    | 是   | -           | 下拉数组（value为选中的值，label为显示对应的下拉内容）       |

## siftData-radio（ 占一整行的单选按钮）

**简要描述：**

- siftData中的多选下拉选择器

  ```
    {
      type: "radio",
      key: "serveTheme",
      label: "服务类型",
      placeholder: "",
      defaultValue: "",
      data: [
        {
            "label":"全部",
            "value":""
        },
        {
            "label":"查询服务",
            "value":"0"
        },
        {
            "label":"审批服务",
            "value":"1"
        },
        {
            "label":"定制服务",
            "value":"2"
        }
      ]
    }
  ```

  **参数说明**

| 参数名       | 类型      | 必填 | 默认值      | 说明                                                   |
| ------------ | --------- | ---- | ----------- | ------------------------------------------------------ |
| type         | string    | 是   | radio       |                                                        |
| key          | string    | 是   | -           | 筛选条件中对应的key值                                  |
| label        | string    | 否   | -           | 文本框的标题                                           |
| placeholder  | string    | 否   | 请选择label | 文本框的展位提示符                                     |
| defaultValue | string    | 否   | -           | 初始化选中的值                                         |
| date         | List<Map> | 是   | -           | 下拉数组（value为选中的值，label为显示对应的下拉内容） |

## siftData-cascader（固定层级数的联动查询）

**简要描述：**

- siftData中的多选下拉选择器

  ```
   {
      type: "cascader",
      selectList: [
        {
          key: "grade",
          label: "年级",
          placeholder: "",
          defaultValue: "",
          data: [
            {
              value: "",
              label: "全部"
            },
            {
              value: "2017",
              label: "2017级"
            },
            {
              value: "2018",
              label: "2018级"
            }
          ]
        },
        {
          key: "class",
          label: "班级",
          placeholder: "",
          defaultValue: "",
          url: "/xxx/xxx",
          data: []
        },
        {
          key: "student",
          label: "学生",
          placeholder: "",
          defaultValue: "",
          url: "/xxx/xxx",
          data: []
        }
      ]
    }
  ```

  **参数说明**

| 参数名     | 类型   | 必填 | 默认值   | 说明         |
| ---------- | ------ | ---- | -------- | ------------ |
| type       | string | 是   | cascader |              |
| selectList | List   | 是   | -        | 联动下拉数组 |

- selectList成员参数

| 参数名       | 类型      | 必填 | 默认值      | 说明                                                         |
| ------------ | --------- | ---- | ----------- | ------------------------------------------------------------ |
| key          | string    | 是   | -           | 筛选条件中对应的key值                                        |
| label        | string    | 否   | -           | 文本框的标题                                                 |
| placeholder  | string    | 否   | 请选择label | 文本框的展位提示符                                           |
| defaultValue | string    | 否   | -           | 初始化的默认值                                               |
| url          | string    | 是   | -           | 该层级数据接口，选中非全部（即空值）的上一级时，会触发获取本层data的接口方法，请求中会自带上一级key=value的参数 |
| date         | List<Map> | 是   | -           | 下拉数组（value为选中的值，label为显示对应的下拉内容），PS:如果下拉中有全部选项请在data里自行添加 |

**简要描述：**

- 联动查询的接口规则

**请求URL：**

- `本层级的url`

**请求方式：**

- POST

**参数：**

| 参数名        | 必选 | 类型   | 值             |
| ------------- | ---- | ------ | -------------- |
| 上一层及的key | 是   | string | 上一级选中的值 |

**返回示例**

```
{
    "resCode": "0",
    "resMsg": "成功",
    "data": [
        {
        "hasChild": 0,
        "label": "全部",
        "value": ""
        },
        {
        "label": "运筹学专业",
        "value": "运筹学专业"
        }
    ],
    "defaultValue": "",
    "label": "专业",
    "type": "cascader",
    "key": "major",
    "url": "/achievement/queryCla"
}
```

**返回参数说明**

| 参数名  | 类型      | 说明           |
| ------- | --------- | -------------- |
| resData | List<Map> | 该层级下拉数据 |



