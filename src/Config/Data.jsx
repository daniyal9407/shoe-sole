import { images } from "../Assets";

export const loginCredenctials = {
  email: "admin@gmail.com",
  password: "123456",
  status: true,
  role: "admin",
  message: "login successfully",
  token: "1164|ihHvE9J6cn1U3St4Sk6v6JKOdm2ARA87hXYbIdS63831040a",
};

export const userDetail = {
  status: true,
  message: "user data",
  detail: {
    id: 7,
    name: "Admin",
    fullName: "Jake Dawson",
    email: "admin@gmail.com",
    phone: "090078601",
    status: 1,
    created_at: "2024-05-27T11:50:43.000000Z",
    updated_at: "2024-06-14T07:47:49.000000Z",
    deleted_at: null,
    status_detail: "Active",
    phone_number: "090078601",
    role: "admin",
    file: {
      id: 1425,
      fileable_type: "AppModelsBranch",
      fileable_id: 7,
      path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
      file_url:
        "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
};

export const dashboardChart = {
  status: true,
  message: "chart data",
  detail: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

export const userData = {
  status: true,
  message: "user data",
  detail: {
    id: 7,
    first_name: "Admin",
    last_name: "abc",
    fullName: "Jake Dawson",
    email: "admin@gmail.com",
    status: 1,
    status_detail: "Active",
    phone_number: "090078601",
    profileStatus: true,
    file: {
      id: 1425,
      fileable_type: "AppModelsBranch",
      fileable_id: 7,
      path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
      file_url:
        "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  },
};
export const StatsCardData = {
  status: true,
  message: "card listing",
  detail: {
    data: [
      {
        id: 1,
        image: images.stats1,
        number: "22",
        text: "Users Registered",
        change: "100",
        increase: true,
        totalPost: "Since last week",
      },
      {
        id: 2,
        image: images.stats2,
        number: "122",
        text: "Club Created",
        change: "10",
        increase: false,
        totalPost: "Since last week",
      },
    ],
  },
};
export const userManagementData = {
  status: true,
  message: "branch listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 17,
        restaurant_id: 13,
        name: "Darvesh Restuarant",
        full_name: "Abc Xyz",
        first_name: "Abc",
        last_name: "Xyz",
        Dob: "MM/DD/YYYY",
        email: "abc@gmail.com",
        phone: "03656558478",
        status: 1,
        address: "8MCC+G3G, Karim Abad Road, Hunza, Karimabad",
        created_at: "2024-06-25T14:29:37.000000Z",
        updated_at: "2024-07-05T08:21:31.000000Z",
        deleted_at: null,
        status_detail: "Active",
        profileStatus: true,
        phone_number: "03656558478",
        role: "branch",
        file: {
          id: 1425,
          fileable_type: "AppModelsBranch",
          fileable_id: 7,
          path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
          file_url:
            "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      {
        id: 19,
        restaurant_id: 13,
        full_name: "Abc Xyz",
        first_name: "Abc",
        last_name: "Xyz",
        Dob: "MM/DD/YYYY",
        full_name: "Abc1 Xyz",
        email: "abc@gmail.com1",
        phone: "03656558478",
        status: 0,
        address: "8MCC+G3G, Karim Abad Road, Hunza, Karimabad",
        created_at: "2024-06-25T14:29:37.000000Z",
        updated_at: "2024-07-05T08:21:37.000000Z",
        deleted_at: null,
        status_detail: "Inactive",
        profileStatus: false,
        phone_number: "03656558478",
        role: "branch",
        file: {
          id: 1425,
          fileable_type: "AppModelsBranch",
          fileable_id: 7,
          path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
          file_url:
            "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      {
        id: 20,
        restaurant_id: 13,
        full_name: "Abc Xyz",
        email: "abc@gmail.com1",
        full_name: "Abc Xyz",
        first_name: "Abc",
        last_name: "Xyz",
        Dob: "MM/DD/YYYY",
        phone: "03656558478",
        status: 1,
        profileStatus: true,
        address: "8MCC+G3G, Karim Abad Road, Hunza, Karimabad",
        created_at: "2024-06-25T14:29:37.000000Z",
        updated_at: "2024-06-25T14:41:04.000000Z",
        deleted_at: null,
        status_detail: "Active",
        phone_number: "03656558478",
        role: "branch",
        file: {
          id: 1425,
          fileable_type: "AppModelsBranch",
          fileable_id: 7,
          path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
          file_url:
            "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      {
        id: 16,
        restaurant_id: 3,
        full_name: "Abc Xyz",
        email: "abc@gmail.com1",
        full_name: "Abc Xyz",
        first_name: "Abc",
        last_name: "Xyz",
        Dob: "MM/DD/YYYY",
        phone: "03785454545",
        lat: 9.32996,
        lng: 7.84148003,
        status: 1,
        profileStatus: true,
        address: "8RHR+XH Koso, Nigeria",
        created_at: "2024-06-13T16:11:46.000000Z",
        updated_at: "2024-06-26T12:39:19.000000Z",
        deleted_at: null,
        status_detail: "Active",
        phone_number: "03785454545",
        role: "branch",
        file: {
          id: 1425,
          fileable_type: "AppModelsBranch",
          fileable_id: 7,
          path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
          file_url:
            "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      {
        id: 13,
        restaurant_id: 3,
        full_name: "Abc Xyz",
        email: "abc@gmail.com1",
        full_name: "Abc Xyz",
        first_name: "Abc",
        last_name: "Xyz",
        Dob: "MM/DD/YYYY",
        phone: "234234324",
        profileStatus: true,
        status: 1,
        address: "8RHR+XH Koso, Nigeria",
        created_at: "2024-05-27T12:39:18.000000Z",
        updated_at: "2024-06-14T07:47:13.000000Z",
        deleted_at: null,
        status_detail: "Active",
        phone_number: "234234324",
        role: "branch",
      },
      {
        id: 14,
        restaurant_id: 11,
        full_name: "Abc Xyz",
        email: "abc@gmail.com1",
        full_name: "Abc Xyz",
        first_name: "Abc",
        last_name: "Xyz",
        Dob: "MM/DD/YYYY",
        phone: "234234324",
        profileStatus: true,
        status: 1,
        address: "Do Darya, DHA Phase 8, Karachi",
        created_at: "2024-05-27T12:39:18.000000Z",
        updated_at: "2024-06-14T07:48:57.000000Z",
        deleted_at: null,
        status_detail: "Active",
        phone_number: "234234324",
        role: "branch",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const notificationsData = {
  status: true,
  message: "user notifications",
  detail: {
    notifications: {
      current_page: 1,
      data: [
        {
          id: "2fb2b0ba-4859-47c4-826c-1742a8ac39db",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Restaurant Olympia Gilbert has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 77,
              },
            },
          },
          read_at: true,
          created_at: "2024-06-14T10:42:45.000000Z",
          updated_at: "2024-06-14T10:42:45.000000Z",
        },
        {
          id: "31d6a0f8-d820-4afd-a1c7-e64abaf8796a",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Branch Charles has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 74,
              },
            },
          },
          read_at: false,
          created_at: "2024-06-06T12:03:40.000000Z",
          updated_at: "2024-06-06T12:03:40.000000Z",
        },
        {
          id: "3e380bad-85bf-411a-ab5a-ed3977bf179c",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Restaurant Britanney Mcbride has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 71,
              },
            },
          },
          read_at: true,
          created_at: "2024-05-30T13:20:22.000000Z",
          updated_at: "2024-05-30T13:20:22.000000Z",
        },
        {
          id: "6169abb9-24cb-4f47-9bb4-74bc886dfa5a",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Branch Charles has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 78,
              },
            },
          },
          read_at: null,
          created_at: "2024-06-25T11:16:18.000000Z",
          updated_at: "2024-06-25T11:16:18.000000Z",
        },
        {
          id: "704674e3-84c6-4de4-878e-5f6a53a1c16a",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Restaurant Kiona Phelps has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 72,
              },
            },
          },
          read_at: null,
          created_at: "2024-05-30T13:21:05.000000Z",
          updated_at: "2024-05-30T13:21:05.000000Z",
        },
        {
          id: "7b4774e0-0326-4481-8a33-044c1c047810",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "User Charles has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 81,
              },
            },
          },
          read_at: null,
          created_at: "2024-06-25T11:17:25.000000Z",
          updated_at: "2024-06-25T11:17:25.000000Z",
        },
        {
          id: "91740da1-89df-407b-a2c0-042ed28a1468",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Branch Peter Browning has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 83,
              },
            },
          },
          read_at: null,
          created_at: "2024-06-26T11:22:54.000000Z",
          updated_at: "2024-06-26T11:22:54.000000Z",
        },
        {
          id: "9ff7d276-caa5-475d-845a-4d0359d0e91d",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Restaurant Carissa Berg has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 69,
              },
            },
          },
          read_at: null,
          created_at: "2024-05-30T11:21:32.000000Z",
          updated_at: "2024-05-30T11:21:32.000000Z",
        },
        {
          id: "ae76c6c0-d193-47af-8635-18df8aa004dc",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Branch Charles has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 80,
              },
            },
          },
          read_at: null,
          created_at: "2024-06-25T11:16:39.000000Z",
          updated_at: "2024-06-25T11:16:39.000000Z",
        },
        {
          id: "bb3fdda5-223f-4d33-b2f4-94676c7b807a",
          type: "App\\Core\\Notifications\\PushNotification",
          notifiable_type: "App\\Models\\Admin",
          notifiable_id: 1,
          data: {
            title:
              "Lorem Ipsum is simply dummy text of printing & typesetting industry.",
            body: "Branch Tucker Buckley has submitted a Feedback",
            route: {
              name: "admin.feedbacks.show",
              params: {
                id: 79,
              },
            },
          },
          read_at: null,
          created_at: "2024-06-25T11:16:25.000000Z",
          updated_at: "2024-06-25T11:16:25.000000Z",
        },
      ],
      first_page_url:
        "http://localhost/food_app/admin-api/notifications?page=1",
      from: 1,
      last_page: 2,
      last_page_url: "http://localhost/food_app/admin-api/notifications?page=2",
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "http://localhost/food_app/admin-api/notifications?page=1",
          label: "1",
          active: true,
        },
        {
          url: "http://localhost/food_app/admin-api/notifications?page=2",
          label: "2",
          active: false,
        },
        {
          url: "http://localhost/food_app/admin-api/notifications?page=2",
          label: "Next &raquo;",
          active: false,
        },
      ],
      next_page_url: "http://localhost/food_app/admin-api/notifications?page=2",
      path: "http://localhost/food_app/admin-api/notifications",
      per_page: 10,
      prev_page_url: null,
      to: 10,
      total: 14,
    },
    total_notifications: 0,
  },
};

export const queryManagementData = {
  status: true,
  message: "branch listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        name: "Tom Albert",
        email: "tomalbert@gmail.com",
        date: "07/05/2022",
        type: "User",
        subject: "Lorem ipsum dolor sit amet",
        Message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismodn gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.",
      },
      {
        id: 2,
        name: "Tom Albert",
        email: "tomalbert@gmail.com",
        date: "07/05/2022",
        type: "Club",
        subject: "Lorem ipsum dolor sit amet",
        Message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismodn gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.",
      },
      {
        id: 3,
        name: "Tom Albert",
        email: "tomalbert@gmail.com",
        date: "07/05/2022",
        type: "User",
        subject: "Lorem ipsum dolor sit amet",
        Message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismodn gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.",
      },
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const clubManagementData = {
  status: true,
  message: "branch listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        uId: "#123",
        club_name: "Abc Xyz",
        first_name: "abc",
        last_name: "xyz",
        coach_name: "Abc Xyz",
        email: "abc@example.com",
        date: "mm/dd/yyyy",
        status_detail: "Active",
        profileStatus: true,
        password: "#123",
        file: {
          id: 1425,
          fileable_type: "AppModelsBranch",
          fileable_id: 7,
          path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
          file_url:
            "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      {
        id: 2,
        uId: "#1234",
        club_name: "Abc Xyz",
        coach_name: "Abc Xyz",
        email: "abc@example.com",
        date: "mm/dd/yyyy",
        status_detail: "Inactive",
        profileStatus: false,
        password: "#123",
        file: {
          id: 1425,
          fileable_type: "AppModelsBranch",
          fileable_id: 7,
          path: "tmT299v0z6IphNMUlFk1evTI6rKBTA7auVIa449d.png",
          file_url:
            "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      },
      
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};

export const clubUserData = {
  status: true,
  message: "branch listing",
  detail: {
    current_page: 1,
    data: [
      {
        id: 1,
        club_name: "Abc Xyz",
        coach_name: "Abc Xyz",
        date: "mm/dd/yyyy",
        status_detail: "Active",
      },
      
      
    ],
    first_page_url: "http://localhost/food_app/admin-api/branches?page=1",
    from: 1,
    last_page: 2,
    last_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://localhost/food_app/admin-api/branches?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    next_page_url: "http://localhost/food_app/admin-api/branches?page=2",
    path: "http://localhost/food_app/admin-api/branches",
    per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 11,
  },
};
