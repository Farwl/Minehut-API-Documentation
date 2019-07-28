const documentation = [
    {
        method: 'get',
        name: '/servers',
        auth: false,
        endpoint: 'https://api.minehut.com/servers',
        description: [
            'Returns a list of currently online player servers.',
        ],
        response: {
            file: 'servers.txt',
        },
    },
    {
        method: 'get',
        name: '/server/<span class="placeholder">Server ID</span>',
        auth: false,
        endpoint: 'https://api.minehut.com/server/{server-id}',
        description: [
            'Returns basic information of a server using its ID.',
        ],
        response: {
            file: 'server.txt',
        },
    },
    {
        method: 'get',
        name:
            '/server/<span class="placeholder">Server Name</span>?byName=true',
        auth: false,
        endpoint: 'https://api.minehut.com/server/{server-name}?byName=true',
        description: [
            'Same as the previous, but uses the name instead of the ID.',
        ],
    },
    {
        method: 'get',
        name: '/plugins_public',
        auth: false,
        endpoint: 'https://api.minehut.com/plugins_public',
        description: [
            'Returns all the available plugins for Minehut servers, along with their id, name, and description.',
        ],
        response: {
            file: 'plugins_public.txt',
        },
    },
    {
        method: 'post',
        name: '/users/login',
        auth: false,
        endpoint: 'https://api.minehut.com/users/login',
        body:
            '{"email":"spongebob@squarep.ants","password":"ILiveInAPineappleUnderTheSea404"}',
        description: [
            'Returns token, user id, and servers from login credentials.',
        ],
        response: {
            file: 'login.txt',
        },
    },
    {
        method: 'post',
        name: '/users/ghost_login',
        auth: true,
        endpoint: 'https://api.minehut.com/users/ghost_login',
        description: [
            'Returns the same data as <span class="code">/users/login</span>, but instead of using a request body, it uses authorization.',
        ],
    },
    {
        method: 'post',
        name: '/users/signup',
        auth: false,
        endpoint: 'https://api.minehut.com/users/signup',
        body:
            '{"email":"spongebob@squarep.ants","birthday":"1986-01-02T00:05:40.082Z"}',
        description: [
            'Signup using an email and date of birth. Also sends a verification code to said email.',
        ],
    },
    {
        method: 'post',
        name: '/users/confirm_email',
        auth: false,
        endpoint: 'https://api.minehut.com/users/confirm_email',
        body: '{"email_code":"P1N34PPL3","password":"P@ssw0rd1234"}',
        description: [
            'Verifies email code.',
        ],
    },
    {
        method: 'get',
        name: '/user/<span class="placeholder">User ID</span>',
        auth: true,
        endpoint: 'https://api.minehut.com/user/{user-id}',
        description: [
            'Returns user info.',
        ],
        response: {
            file: 'user_info.txt',
        },
    },
    {
        method: 'post',
        name: '/servers/create',
        auth: true,
        endpoint: 'https://api.minehut.com/servers/create',
        body: '{"name":"MyServer","platform":"java"}',
        description: [
            'Creates a new server on the specified account (maximum of 2).',
        ],
    },
    {
        method: 'get',
        name: '/servers/<span class="placeholder">Server ID</span>/server_data',
        auth: true,
        endpoint: 'https://api.minehut.com/servers/{server-id}/server_data',
        description: [
            'Returns similar information to /server/{server-id}.',
        ],
    },
    {
        method: 'get',
        name: '/server/<span class="placeholder">Server ID</span>/status',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/status',
        description: [
            'Returns the status of the server (starting, stopping, players online, plugins etc.).',
        ],
    },
    {
        method: 'post',
        name:
            '/server/<span class="placeholder">Server ID</span>/start_service',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/start_service',
        description: [
            'Brings the server out of hibernation and starts it.',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/start',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/start',
        description: [
            "Starts the server if it's not in hibernation.",
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/shutdown',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/shutdown',
        description: [
            'Stops the server, but does not put it in hibernation.',
        ],
    },
    {
        method: 'post',
        name:
            '/server/<span class="placeholder">Server ID</span>/destroy_service',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/destroy_service',
        description: [
            'Immediately stops the server and puts it in hibernation.',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/repair_files',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/repair_files',
        description: [
            'Attempts to repair the server files incase of an issue.',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/reset_all',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/reset_all',
        description: [
            'Completely resets the server (Erases all files on it).',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/send_command',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/send_command',
        body: '{"command":"/say Hello World!"}',
        description: [
            'Runs a console command to the server.',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/change_name',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/change_name',
        body: '{"name":"MyServer2.0"}',
        description: [
            'Changes the servers name. Error 400 if name is already taken.',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/change_motd',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/change_motd',
        body: '{"command":"&6Ooo, &athis is nice!"}',
        description: [
            'Changes the servers MOTD (message of the day).',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/visibility',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/visibility',
        body: '{"visibility":"true/false"}',
        description: [
            'Changes whether your server appears in the server list.',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/save',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/save',
        description: [
            'Saves the servers world.',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/reset_world',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/reset_world',
        description: [
            'Resets the servers world with a new seed.',
        ],
    },
    {
        method: 'post',
        name:
            '/server/<span class="placeholder">Server ID</span>/edit_server_properties',
        auth: true,
        endpoint:
            'https://api.minehut.com/server/{server-id}/edit_server_properties',
        body:
            '{"field":"See below for possible values", "value":"A value pertaining to the field"}',
        description: [
            'Changes values in the server.properties file.',
            'Possible fields are <span class="code">max_players</span>, <span class="code">level_type</span>, <span class="code">level_name</span>, <span class="code">generator_settings</span>, <span class="code">gamemode</span>, <span class="code">force_gamemode</span>, <span class="code">pvp</span>, <span class="code">spawn_mobs</span>, <span class="code">spawn_animals</span>, <span class="code">allow_flight</span>, <span class="code">generator_settings</span>, <span class="code">difficulty</span>, <span class="code">hardcore</span>, <span class="code">enable_command_block</span>, <span class="code">announce_player_achievements</span>, <span class="code">allow_nether</span>, <span class="code">generate_structures</span>, and <span class="code">resource_pack</span>.',
        ],
    },
    {
        method: 'post',
        name: '/file/world/upload/<span class="placeholder">Server ID</span>',
        auth: true,
        endpoint: 'https://api.minehut.com/file/world/upload/{server-id}',
        body: 'File (binary)',
        description: [
            'Uploads a .zip world.',
        ],
    },
    {
        method: 'post',
        name: '/server/<span class="placeholder">Server ID</span>/plugins',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/plugins',
        description: [
            'Returns all the plugins and whether they are installed or not.',
        ],
        response: {
            file: 'plugins.txt',
        },
    },
    {
        method: 'post',
        name:
            '/server/<span class="placeholder">Server ID</span>/install_plugin',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/install_plugin',
        body: '{"plugin":"5a42ba4846246d33fa64c625"}',
        description: [
            'Installs a plugin onto the server.',
        ],
    },
    {
        method: 'post',
        name:
            '/server/<span class="placeholder">Server ID</span>/remove_plugin',
        auth: true,
        endpoint: 'https://api.minehut.com/server/{server-id}/remove_plugin',
        body: '{"plugin":"5a42ba4846246d33fa64c625"}',
        description: [
            'Uninstalls a plugin from the server.',
        ],
    },
    {
        method: 'post',
        name:
            '/server/<span class="placeholder">Server ID</span>/remove_plugin_data',
        auth: true,
        endpoint:
            'https://api.minehut.com/server/{server-id}/remove_plugin_data',
        body: '{"plugin":"5a42ba4846246d33fa64c625"}',
        description: [
            'Resets the plugin configuration file.',
        ],
    },
    {
        method: 'post',
        name: '/file/<span class="placeholder">Server ID</span>/list',
        auth: true,
        endpoint: 'https://api.minehut.com/file/{server-id}/list',
        description: [
            'Returns all the files and folders in the servers root.',
        ],
        response: {
            file: 'files.txt',
        },
    },
    {
        method: 'post',
        name:
            '/file/<span class="placeholder">Server ID</span>/list/<span class="placeholder">Path</span>',
        auth: true,
        endpoint: 'https://api.minehut.com/file/{server-id}/list/{path}',
        description: [
            'Returns all the files and folders in the provided path.',
        ],
        response: {
            file: 'files.txt',
        },
    },
    {
        method: 'post',
        name:
            '/file/<span class="placeholder">Server ID</span>/read/<span class="placeholder">File path</span>',
        auth: true,
        endpoint: 'https://api.minehut.com/file/{server-id}/read/{file-path}',
        description: [
            'Returns all the contents of a file.',
        ],
        response: {
            file: 'read.txt',
        },
    },
    {
        method: 'post',
        name:
            '/file/<span class="placeholder">Server ID</span>/edit/<span class="placeholder">File path</span>',
        auth: true,
        endpoint: 'https://api.minehut.com/file/{server-id}/edit/{file-path}',
        body:
            '{"content":"This text will overwrite whatever is inside the file"}',
        description: [
            'Edits a file and saves it with the provided content (~4GB max).',
            'This also creates a file if one does not exist (provide a blank content for a blank file)',
        ],
    },
    {
        method: 'post',
        name:
            '/file/<span class="placeholder">Server ID</span>/delete/<span class="placeholder">File path</span>',
        auth: true,
        endpoint: 'https://api.minehut.com/file/{server-id}/delete/{file-path}',
        description: [
            'Deletes a file.',
        ],
    },
    {
        method: 'post',
        name: '/file/<span class="placeholder">Server ID</span>/folder/create',
        auth: true,
        endpoint: 'https://api.minehut.com/file/{server-id}/folder/create',
        body: '{"name":"MyFolder","directory":"world"}',
        description: [
            'Creates a new folder in the directory.',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/users/registrations/week',
        auth: true,
        endpoint:
            'https://api.minehut.com/admin/stats/users/registrations/week',
        description: [
            'Weekly user registrations',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/subscriptions/week',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/stats/subscriptions/week',
        description: [
            'Weekly subscriptions',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/subscriptions/new/week',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/stats/subscriptions/new/week',
        description: [
            'Weekly new subscriptions',
        ],
    },
    {
        method: 'get',
        name: '/network/stats/joins/week',
        auth: true,
        endpoint: 'https://api.minehut.com/network/stats/joins/week',
        description: [
            'Weekly joins',
        ],
    },
    {
        method: 'get',
        name: '/network/stats/joins/week/java',
        auth: true,
        endpoint: 'https://api.minehut.com/network/stats/joins/week/java',
        description: [
            'Weekly java joins',
        ],
    },
    {
        method: 'get',
        name: '/network/stats/joins/week/bedrock',
        auth: true,
        endpoint: 'https://api.minehut.com/network/stats/joins/week/bedrock',
        description: [
            'Weekly bedrock joins',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/subscriptions/cancellations/week',
        auth: true,
        endpoint:
            'https://api.minehut.com/admin/stats/subscriptions/cancellations/week',
        description: [
            'Weekly subscription cancellations',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/votes/week',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/stats/votes/week',
        description: [
            'Weekly votes',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/users/registrations/month',
        auth: true,
        endpoint:
            'https://api.minehut.com/admin/stats/users/registrations/month',
        description: [
            'Monthly user registrations',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/subscriptions/month',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/stats/subscriptions/month',
        description: [
            'Monthly subscriptions',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/subscriptions/new/month',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/stats/subscriptions/new/month',
        description: [
            'Monthly new subscriptions',
        ],
    },
    {
        method: 'get',
        name: '/network/stats/joins/month',
        auth: true,
        endpoint: 'https://api.minehut.com/network/stats/joins/month',
        description: [
            'Monthly joins',
        ],
    },
    {
        method: 'get',
        name: '/network/stats/joins/month/java',
        auth: true,
        endpoint: 'https://api.minehut.com/network/stats/joins/month/java',
        description: [
            'Monthly java joins',
        ],
    },
    {
        method: 'get',
        name: '/network/stats/joins/month/bedrock',
        auth: true,
        endpoint: 'https://api.minehut.com/network/stats/joins/month/bedrock',
        description: [
            'Monthly bedrock joins',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/subscriptions/cancellations/month',
        auth: true,
        endpoint:
            'https://api.minehut.com/admin/stats/subscriptions/cancellations/month',
        description: [
            'Monthly subscription cancellations',
        ],
    },
    {
        method: 'get',
        name: '/admin/stats/votes/month',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/stats/votes/month',
        description: [
            'Monthly votes',
        ],
    },
    {
        method: 'get',
        name: '/network/players/distribution',
        auth: true,
        endpoint: 'https://api.minehut.com/network/players/distribution',
        description: [
            'Player distribution',
        ],
    },
    {
        method: 'post',
        name: '/website/navbar/promotion',
        auth: true,
        endpoint: 'https://api.minehut.com/website/navbar/promotion',
        description: [
            'Update navbar promotion',
        ],
    },
    {
        method: 'get',
        name: '/user/name?byEmail=true',
        auth: true,
        endpoint: 'https://api.minehut.com/user/name?byEmail=true',
        description: [
            'Get user info from email',
        ],
    },
    {
        method: 'get',
        name: '/user/name?byMinecraftName=true',
        auth: true,
        endpoint: 'https://api.minehut.com/user/name?byMinecraftName=true',
        description: [
            'Get user info from minehut name',
        ],
    },
    {
        method: 'post',
        name: '/user/name/add_credits/amount',
        auth: true,
        endpoint: 'https://api.minehut.com/user/name/add_credits/amount',
        description: [
            'Add credits to user',
        ],
    },
    {
        method: 'post',
        name: '/user/name/delete_session',
        auth: true,
        endpoint: 'https://api.minehut.com/user/name/delete_session',
        description: [
            'Delete user session',
        ],
    },
    {
        method: 'post',
        name: '/admin/add/name',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/add/name',
        description: [
            'Add new admin',
        ],
    },
    {
        method: 'post',
        name: '/admin/gdpr/user',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/gdpr/user',
        description: [
            'GDPR dump',
        ],
    },
    {
        method: 'post',
        name: '/admin/delete/user',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/delete/user',
        description: [
            'Delete account',
        ],
    },
    {
        method: 'get',
        name: '/server/name?byName=true',
        auth: true,
        endpoint: 'https://api.minehut.com/server/name?byName=true',
        description: [
            'Server lookup',
        ],
    },
    {
        method: 'post',
        name: '/server/name/destroy_service_admin',
        auth: true,
        endpoint: 'https://api.minehut.com/server/name/destroy_service_admin',
        description: [
            'Destroy server service',
        ],
    },
    {
        method: 'post',
        name: '/admin/name/suspend',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/name/suspend',
        description: [
            'Suspend server',
        ],
    },
    {
        method: 'post',
        name: '/admin/name/release',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/name/release',
        description: [
            'Release a server from suspension',
        ],
    },
    {
        method: 'get',
        name: '/plugins',
        auth: true,
        endpoint: 'https://api.minehut.com/plugins',
        description: [
            'Get plugins',
        ],
    },
    {
        method: 'post',
        name: '/plugin/id/edit',
        auth: true,
        endpoint: 'https://api.minehut.com/plugin/id/edit',
        description: [
            'Edit plugin',
        ],
    },
    {
        method: 'post',
        name: '/plugin/id/delete',
        auth: true,
        endpoint: 'https://api.minehut.com/plugin/id/delete',
        description: [
            'Delete plugin',
        ],
    },
    {
        method: 'post',
        name: '/plugins',
        auth: true,
        endpoint: 'https://api.minehut.com/plugins',
        description: [
            'Add plugin',
        ],
    },
    {
        method: 'post',
        name: '/admin/payments/range',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/payments/range',
        description: [
            'Payment range',
        ],
    },
    {
        method: 'post',
        name: '/admin/credits/range',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/credits/range',
        description: [
            'Credit ranges',
        ],
    },
    {
        method: 'post',
        name: '/admin/voting/set/reward',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/voting/set/reward',
        description: [
            'Update vote award',
        ],
    },
    {
        method: 'get',
        name: '/vote/reward',
        auth: true,
        endpoint: 'https://api.minehut.com/vote/reward',
        description: [
            'Current voting award',
        ],
    },
    {
        method: 'post',
        name: '/admin/votes/range',
        auth: true,
        endpoint: 'https://api.minehut.com/admin/votes/range',
        description: [
            'Voting range',
        ],
    },
    {
        method: 'post',
        name: '/network/motd',
        auth: true,
        endpoint: 'https://api.minehut.com/network/motd',
        description: [
            'Update Bungeecord MOTD ',
        ],
    },
];
