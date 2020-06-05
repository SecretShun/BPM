app.config(['fileManagerConfigProvider', function (config) {
    var defaults = config.$get();
    var fileManagerApiUrl = '/Portal/fileManage/';
    config.set({
        appName: '知识库',
        listUrl: fileManagerApiUrl + 'listFile',
        renameUrl: fileManagerApiUrl + "renameFile",
        removeUrl: fileManagerApiUrl + 'removeFile',
        getContentUrl: fileManagerApiUrl + 'getContent',
        editUrl: fileManagerApiUrl + 'saveFile',
        updateUrl: fileManagerApiUrl + 'updateFile',
        downloadFileUrl: fileManagerApiUrl + 'previewFile',
        createFolderUrl: fileManagerApiUrl + 'createFolder',
        listMyFolderUrl: fileManagerApiUrl + 'listMyFolder',
        allowedActions: angular.extend(defaults.allowedActions, {
            copy : false,
            edit : true,
            changePermissions: true,
            compress: false,
            compressChooseName : false,
            extract: false
        })
    });
}]);

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('cn', {
        filemanager: '文件管理',
        language: '语言',
        chinese : '中文',
        english: '英语',
        confirm: '确定',
        cancel: '取消',
        close: '关闭',
        upload_file: '上传',
        qrcode: '二维码',
        files_will_uploaded_to: '文件会被上传到',
        uploading: '上传中',
        permissions: '权限',
        select_destination_folder: '选择目标文件夹',
        source: '原文件',
        destination: '目标文件',
        copy_file: '复制文件',
        sure_to_delete: '确认删除',
        change_name_move: '更改名称 / 移动',
        enter_new_name_for: '输入一个新名称',
        extract_item: '提取项目',
        extraction_started: 'Extraction started in a background process',
        compression_started: 'Compression started in a background process',
        enter_folder_name_for_extraction: 'Enter the folder name for the extraction of',
        enter_folder_name_for_compression: 'Enter the folder name for the compression of',
        toggle_fullscreen: '全屏',
        edit_file: '编辑文件',
        file_content: '文件内容',
        loading: '加载',
        search: '搜索',
        create_folder: '新建文件夹',
        create: '新建',
        folder_name: '文件夹名称',
        upload: '上传',
        change_permissions: '更改权限',
        change: '更改',
        details: '详细',
        icons: '图标',
        list: '列表',
        name: '名称',
        size: '大小',
        actions: '动作',
        date: '日期',
        no_files_in_folder: '该文件夹中没有文件',
        no_folders_in_folder: '该文件夹不包含子文件夹',
        select_this: '选择',
        go_back: '返回',
        wait: '等待',
        move: '移动',
        download: '下载',
        view_item: '查看',
        remove: '删除',
        edit: '编辑',
        copy: '复制',
        rename: '重命名',
        extract: '提取',
        compress: '压缩',
        error_invalid_filename: '文件名错误或者文件已存在',
        error_modifying: '修改文件室出现错误',
        error_deleting: '删除文件或文件夹时出错',
        error_renaming: '重命名文件时出错',
        error_copying: 'An error occurred copying the file',
        error_compressing: 'An error occurred compressing the file or folder',
        error_extracting: 'An error occurred extracting the file',
        error_creating_folder: 'An error occurred creating the folder',
        error_getting_content: 'An error occurred getting the content of the file',
        error_changing_perms: 'An error occurred changing the permissions of the file',
        error_uploading_files: 'An error occurred uploading files',
        sure_to_start_compression_with: 'Are you sure to compress',
        owner: 'Owner',
        group: 'Group',
        others: 'Others',
        read: 'Read',
        write: 'Write',
        exec: 'Exec',
        original: 'Original',
        changes: 'Changes',
        recursive: 'Recursive',
        preview: '预览',
        open: '打开'
    });
}]);