# react-native-redux-go

This project was generated with react-native-cli@2.0.1.

## Description

The project works on the framework using React-Native to build a client-side and Golang to build a back-end.

Regarding react-native version, 0.57 is the latest via CLI. (I needed 0.56 version to our some project reason...)

Apart from the project reason, the latest one might be better than previous one.

Improvement by changing from `react-native-preset` to `metro-react-native-babel-preset` will resolve native code transpiler issue.

## Report

### missing module (January 06, 2019)

Actually `react-native-preset` is missing module.
In fact, during downgrade react-native (0.57 => 0.56) and this module installation, I was told:

`An unexpected error occurred: https://registry.yarnpkg.com/react-native-preset: Not found`.

## Necessary settings

See official documents for React-Native and Golang global settings.

#### Database

As the project uses MySQL, you need login as root locally. (Password is root.)

Then, set DB `db_todos` and table `tb_todos` with the following columns.

```
CREATE TABLE `tb_todos` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `item` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
```

## Notion

This project is a private work, not relevant any business.

## Author

okapie
