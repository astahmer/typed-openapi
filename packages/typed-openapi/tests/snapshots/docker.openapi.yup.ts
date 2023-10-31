import y from "yup";

export type Port = y.InferType<typeof Port>;
export const Port = y.object({
  IP: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  PrivatePort: y.number().required(),
  PublicPort: y
    .mixed()
    .oneOf([y.number().required(), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  Type: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "tcp" => value === "tcp").required(),
      y.mixed((value): value is "udp" => value === "udp").required(),
      y.mixed((value): value is "sctp" => value === "sctp").required(),
    ])
    .required(),
});

export type MountPoint = y.InferType<typeof MountPoint>;
export const MountPoint = y.object({
  Type: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "bind" => value === "bind").required(),
      y.mixed((value): value is "volume" => value === "volume").required(),
      y.mixed((value): value is "tmpfs" => value === "tmpfs").required(),
      y.mixed((value): value is "npipe" => value === "npipe").required(),
      y.mixed((value): value is "cluster" => value === "cluster").required(),
    ])
    .required()
    .optional(),
  Name: y.string().required().optional(),
  Source: y.string().required().optional(),
  Destination: y.string().required().optional(),
  Driver: y.string().required().optional(),
  Mode: y.string().required().optional(),
  RW: y.boolean().required().optional(),
  Propagation: y.string().required().optional(),
});

export type DeviceMapping = y.InferType<typeof DeviceMapping>;
export const DeviceMapping = y.object({
  PathOnHost: y.string().required().optional(),
  PathInContainer: y.string().required().optional(),
  CgroupPermissions: y.string().required().optional(),
});

export type DeviceRequest = y.InferType<typeof DeviceRequest>;
export const DeviceRequest = y.object({
  Driver: y.string().required().optional(),
  Count: y.number().required().optional(),
  DeviceIDs: y.array(y.string().required()).optional(),
  Capabilities: y.array(y.array(y.string().required())).optional(),
  Options: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
});

export type ThrottleDevice = y.InferType<typeof ThrottleDevice>;
export const ThrottleDevice = y.object({
  Path: y.string().required().optional(),
  Rate: y.number().required().optional(),
});

export type Mount = y.InferType<typeof Mount>;
export const Mount = y.object({
  Target: y.string().required().optional(),
  Source: y.string().required().optional(),
  Type: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "bind" => value === "bind").required(),
      y.mixed((value): value is "volume" => value === "volume").required(),
      y.mixed((value): value is "tmpfs" => value === "tmpfs").required(),
      y.mixed((value): value is "npipe" => value === "npipe").required(),
      y.mixed((value): value is "cluster" => value === "cluster").required(),
    ])
    .required()
    .optional(),
  ReadOnly: y.boolean().required().optional(),
  Consistency: y.string().required().optional(),
  BindOptions: y
    .object({
      Propagation: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "private" => value === "private").required(),
          y.mixed((value): value is "rprivate" => value === "rprivate").required(),
          y.mixed((value): value is "shared" => value === "shared").required(),
          y.mixed((value): value is "rshared" => value === "rshared").required(),
          y.mixed((value): value is "slave" => value === "slave").required(),
          y.mixed((value): value is "rslave" => value === "rslave").required(),
        ])
        .required()
        .optional(),
      NonRecursive: y.boolean().required().optional(),
      CreateMountpoint: y.boolean().required().optional(),
    })
    .optional(),
  VolumeOptions: y
    .object({
      NoCopy: y.boolean().required().optional(),
      Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
      DriverConfig: y
        .object({
          Name: y.string().required().optional(),
          Options: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
        })
        .optional(),
    })
    .optional(),
  TmpfsOptions: y
    .object({
      SizeBytes: y.number().required().optional(),
      Mode: y.number().required().optional(),
    })
    .optional(),
});

export type RestartPolicy = y.InferType<typeof RestartPolicy>;
export const RestartPolicy = y.object({
  Name: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "" => value === "").required(),
      y.mixed((value): value is "no" => value === "no").required(),
      y.mixed((value): value is "always" => value === "always").required(),
      y.mixed((value): value is "unless-stopped" => value === "unless-stopped").required(),
      y.mixed((value): value is "on-failure" => value === "on-failure").required(),
    ])
    .required()
    .optional(),
  MaximumRetryCount: y.number().required().optional(),
});

export type Resources = y.InferType<typeof Resources>;
export const Resources = y.object({
  CpuShares: y.number().required().optional(),
  Memory: y.number().required().optional(),
  CgroupParent: y.string().required().optional(),
  BlkioWeight: y.number().required().optional(),
  BlkioWeightDevice: y
    .array(
      y.object({
        Path: y.string().required().optional(),
        Weight: y.number().required().optional(),
      }),
    )
    .optional(),
  BlkioDeviceReadBps: y.array(ThrottleDevice).optional(),
  BlkioDeviceWriteBps: y.array(ThrottleDevice).optional(),
  BlkioDeviceReadIOps: y.array(ThrottleDevice).optional(),
  BlkioDeviceWriteIOps: y.array(ThrottleDevice).optional(),
  CpuPeriod: y.number().required().optional(),
  CpuQuota: y.number().required().optional(),
  CpuRealtimePeriod: y.number().required().optional(),
  CpuRealtimeRuntime: y.number().required().optional(),
  CpusetCpus: y.string().required().optional(),
  CpusetMems: y.string().required().optional(),
  Devices: y.array(DeviceMapping).optional(),
  DeviceCgroupRules: y.array(y.string().required()).optional(),
  DeviceRequests: y.array(DeviceRequest).optional(),
  KernelMemoryTCP: y.number().required().optional(),
  MemoryReservation: y.number().required().optional(),
  MemorySwap: y.number().required().optional(),
  MemorySwappiness: y.number().required().optional(),
  NanoCpus: y.number().required().optional(),
  OomKillDisable: y.boolean().required().optional(),
  Init: y
    .mixed()
    .oneOf([y.boolean().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  PidsLimit: y
    .mixed()
    .oneOf([y.number().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Ulimits: y
    .array(
      y.object({
        Name: y.string().required().optional(),
        Soft: y.number().required().optional(),
        Hard: y.number().required().optional(),
      }),
    )
    .optional(),
  CpuCount: y.number().required().optional(),
  CpuPercent: y.number().required().optional(),
  IOMaximumIOps: y.number().required().optional(),
  IOMaximumBandwidth: y.number().required().optional(),
});

export type Limit = y.InferType<typeof Limit>;
export const Limit = y.object({
  NanoCPUs: y.number().required().optional(),
  MemoryBytes: y.number().required().optional(),
  Pids: y.number().required().optional(),
});

export type GenericResources = y.InferType<typeof GenericResources>;
export const GenericResources = y.array(
  y.object({
    NamedResourceSpec: y
      .object({
        Kind: y.string().required().optional(),
        Value: y.string().required().optional(),
      })
      .optional(),
    DiscreteResourceSpec: y
      .object({
        Kind: y.string().required().optional(),
        Value: y.number().required().optional(),
      })
      .optional(),
  }),
);

export type ResourceObject = y.InferType<typeof ResourceObject>;
export const ResourceObject = y.object({
  NanoCPUs: y.number().required().optional(),
  MemoryBytes: y.number().required().optional(),
  GenericResources: GenericResources.optional(),
});

export type HealthConfig = y.InferType<typeof HealthConfig>;
export const HealthConfig = y.object({
  Test: y.array(y.string().required()).optional(),
  Interval: y.number().required().optional(),
  Timeout: y.number().required().optional(),
  Retries: y.number().required().optional(),
  StartPeriod: y.number().required().optional(),
});

export type HealthcheckResult = y.InferType<typeof HealthcheckResult>;
export const HealthcheckResult = y
  .mixed()
  .oneOf([
    y.object({
      Start: y.string().required().optional(),
      End: y.string().required().optional(),
      ExitCode: y.number().required().optional(),
      Output: y.string().required().optional(),
    }),
    y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
  ])
  .required();

export type Health = y.InferType<typeof Health>;
export const Health = y
  .mixed()
  .oneOf([
    y.object({
      Status: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "none" => value === "none").required(),
          y.mixed((value): value is "starting" => value === "starting").required(),
          y.mixed((value): value is "healthy" => value === "healthy").required(),
          y.mixed((value): value is "unhealthy" => value === "unhealthy").required(),
        ])
        .required()
        .optional(),
      FailingStreak: y.number().required().optional(),
      Log: y.array(HealthcheckResult).optional(),
    }),
    y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
  ])
  .required();

export type PortBinding = y.InferType<typeof PortBinding>;
export const PortBinding = y.object({
  HostIp: y.string().required().optional(),
  HostPort: y.string().required().optional(),
});

export type PortMap = y.InferType<typeof PortMap>;
export const PortMap = y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>;

export type HostConfig = y.InferType<typeof HostConfig>;
export const HostConfig = y.object({
  CpuShares: y.number().required().optional(),
  Memory: y.number().required().optional(),
  CgroupParent: y.string().required().optional(),
  BlkioWeight: y.number().required().optional(),
  BlkioWeightDevice: y
    .array(
      y.object({
        Path: y.string().required().optional(),
        Weight: y.number().required().optional(),
      }),
    )
    .optional(),
  BlkioDeviceReadBps: y.array(ThrottleDevice).optional(),
  BlkioDeviceWriteBps: y.array(ThrottleDevice).optional(),
  BlkioDeviceReadIOps: y.array(ThrottleDevice).optional(),
  BlkioDeviceWriteIOps: y.array(ThrottleDevice).optional(),
  CpuPeriod: y.number().required().optional(),
  CpuQuota: y.number().required().optional(),
  CpuRealtimePeriod: y.number().required().optional(),
  CpuRealtimeRuntime: y.number().required().optional(),
  CpusetCpus: y.string().required().optional(),
  CpusetMems: y.string().required().optional(),
  Devices: y.array(DeviceMapping).optional(),
  DeviceCgroupRules: y.array(y.string().required()).optional(),
  DeviceRequests: y.array(DeviceRequest).optional(),
  KernelMemoryTCP: y.number().required().optional(),
  MemoryReservation: y.number().required().optional(),
  MemorySwap: y.number().required().optional(),
  MemorySwappiness: y.number().required().optional(),
  NanoCpus: y.number().required().optional(),
  OomKillDisable: y.boolean().required().optional(),
  Init: y
    .mixed()
    .oneOf([y.boolean().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  PidsLimit: y
    .mixed()
    .oneOf([y.number().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Ulimits: y
    .array(
      y.object({
        Name: y.string().required().optional(),
        Soft: y.number().required().optional(),
        Hard: y.number().required().optional(),
      }),
    )
    .optional(),
  CpuCount: y.number().required().optional(),
  CpuPercent: y.number().required().optional(),
  IOMaximumIOps: y.number().required().optional(),
  IOMaximumBandwidth: y.number().required().optional(),
  Binds: y.array(y.string().required()).optional(),
  ContainerIDFile: y.string().required().optional(),
  LogConfig: y
    .object({
      Type: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "json-file" => value === "json-file").required(),
          y.mixed((value): value is "syslog" => value === "syslog").required(),
          y.mixed((value): value is "journald" => value === "journald").required(),
          y.mixed((value): value is "gelf" => value === "gelf").required(),
          y.mixed((value): value is "fluentd" => value === "fluentd").required(),
          y.mixed((value): value is "awslogs" => value === "awslogs").required(),
          y.mixed((value): value is "splunk" => value === "splunk").required(),
          y.mixed((value): value is "etwlogs" => value === "etwlogs").required(),
          y.mixed((value): value is "none" => value === "none").required(),
        ])
        .required()
        .optional(),
      Config: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
    })
    .optional(),
  NetworkMode: y.string().required().optional(),
  PortBindings: PortMap.optional(),
  RestartPolicy: RestartPolicy.optional(),
  AutoRemove: y.boolean().required().optional(),
  VolumeDriver: y.string().required().optional(),
  VolumesFrom: y.array(y.string().required()).optional(),
  Mounts: y.array(Mount).optional(),
  ConsoleSize: y
    .mixed()
    .oneOf([
      y.array(y.number().required()),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
  Annotations: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  CapAdd: y.array(y.string().required()).optional(),
  CapDrop: y.array(y.string().required()).optional(),
  CgroupnsMode: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "private" => value === "private").required(),
      y.mixed((value): value is "host" => value === "host").required(),
    ])
    .required()
    .optional(),
  Dns: y.array(y.string().required()).optional(),
  DnsOptions: y.array(y.string().required()).optional(),
  DnsSearch: y.array(y.string().required()).optional(),
  ExtraHosts: y.array(y.string().required()).optional(),
  GroupAdd: y.array(y.string().required()).optional(),
  IpcMode: y.string().required().optional(),
  Cgroup: y.string().required().optional(),
  Links: y.array(y.string().required()).optional(),
  OomScoreAdj: y.number().required().optional(),
  PidMode: y.string().required().optional(),
  Privileged: y.boolean().required().optional(),
  PublishAllPorts: y.boolean().required().optional(),
  ReadonlyRootfs: y.boolean().required().optional(),
  SecurityOpt: y.array(y.string().required()).optional(),
  StorageOpt: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Tmpfs: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  UTSMode: y.string().required().optional(),
  UsernsMode: y.string().required().optional(),
  ShmSize: y.number().required().optional(),
  Sysctls: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Runtime: y.string().required().optional(),
  Isolation: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "default" => value === "default").required(),
      y.mixed((value): value is "process" => value === "process").required(),
      y.mixed((value): value is "hyperv" => value === "hyperv").required(),
    ])
    .required()
    .optional(),
  MaskedPaths: y.array(y.string().required()).optional(),
  ReadonlyPaths: y.array(y.string().required()).optional(),
});

export type ContainerConfig = y.InferType<typeof ContainerConfig>;
export const ContainerConfig = y.object({
  Hostname: y.string().required().optional(),
  Domainname: y.string().required().optional(),
  User: y.string().required().optional(),
  AttachStdin: y.boolean().required().optional(),
  AttachStdout: y.boolean().required().optional(),
  AttachStderr: y.boolean().required().optional(),
  ExposedPorts: y
    .mixed()
    .oneOf([
      y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
  Tty: y.boolean().required().optional(),
  OpenStdin: y.boolean().required().optional(),
  StdinOnce: y.boolean().required().optional(),
  Env: y.array(y.string().required()).optional(),
  Cmd: y.array(y.string().required()).optional(),
  Healthcheck: HealthConfig.optional(),
  ArgsEscaped: y
    .mixed()
    .oneOf([y.boolean().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Image: y.string().required().optional(),
  Volumes: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  WorkingDir: y.string().required().optional(),
  Entrypoint: y.array(y.string().required()).optional(),
  NetworkDisabled: y
    .mixed()
    .oneOf([y.boolean().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  MacAddress: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  OnBuild: y
    .mixed()
    .oneOf([
      y.array(y.string().required()),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  StopSignal: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  StopTimeout: y
    .mixed()
    .oneOf([y.number().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Shell: y
    .mixed()
    .oneOf([
      y.array(y.string().required()),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
});

export type EndpointIPAMConfig = y.InferType<typeof EndpointIPAMConfig>;
export const EndpointIPAMConfig = y
  .mixed()
  .oneOf([
    y.object({
      IPv4Address: y.string().required().optional(),
      IPv6Address: y.string().required().optional(),
      LinkLocalIPs: y.array(y.string().required()).optional(),
    }),
    y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
  ])
  .required();

export type EndpointSettings = y.InferType<typeof EndpointSettings>;
export const EndpointSettings = y.object({
  IPAMConfig: EndpointIPAMConfig.optional(),
  Links: y.array(y.string().required()).optional(),
  Aliases: y.array(y.string().required()).optional(),
  NetworkID: y.string().required().optional(),
  EndpointID: y.string().required().optional(),
  Gateway: y.string().required().optional(),
  IPAddress: y.string().required().optional(),
  IPPrefixLen: y.number().required().optional(),
  IPv6Gateway: y.string().required().optional(),
  GlobalIPv6Address: y.string().required().optional(),
  GlobalIPv6PrefixLen: y.number().required().optional(),
  MacAddress: y.string().required().optional(),
  DriverOpts: y
    .mixed()
    .oneOf([
      y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
});

export type NetworkingConfig = y.InferType<typeof NetworkingConfig>;
export const NetworkingConfig = y.object({
  EndpointsConfig: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
});

export type Address = y.InferType<typeof Address>;
export const Address = y.object({
  Addr: y.string().required().optional(),
  PrefixLen: y.number().required().optional(),
});

export type NetworkSettings = y.InferType<typeof NetworkSettings>;
export const NetworkSettings = y.object({
  Bridge: y.string().required().optional(),
  SandboxID: y.string().required().optional(),
  HairpinMode: y.boolean().required().optional(),
  LinkLocalIPv6Address: y.string().required().optional(),
  LinkLocalIPv6PrefixLen: y.number().required().optional(),
  Ports: PortMap.optional(),
  SandboxKey: y.string().required().optional(),
  SecondaryIPAddresses: y
    .mixed()
    .oneOf([y.array(Address), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  SecondaryIPv6Addresses: y
    .mixed()
    .oneOf([y.array(Address), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  EndpointID: y.string().required().optional(),
  Gateway: y.string().required().optional(),
  GlobalIPv6Address: y.string().required().optional(),
  GlobalIPv6PrefixLen: y.number().required().optional(),
  IPAddress: y.string().required().optional(),
  IPPrefixLen: y.number().required().optional(),
  IPv6Gateway: y.string().required().optional(),
  MacAddress: y.string().required().optional(),
  Networks: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
});

export type GraphDriverData = y.InferType<typeof GraphDriverData>;
export const GraphDriverData = y.object({
  Name: y.string().required(),
  Data: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
});

export type ChangeType = y.InferType<typeof ChangeType>;
export const ChangeType = y
  .mixed()
  .oneOf([
    y.mixed((value): value is 0 => value === 0).required(),
    y.mixed((value): value is 1 => value === 1).required(),
    y.mixed((value): value is 2 => value === 2).required(),
  ])
  .required();

export type FilesystemChange = y.InferType<typeof FilesystemChange>;
export const FilesystemChange = y.object({
  Path: y.string().required(),
  Kind: ChangeType,
});

export type ImageInspect = y.InferType<typeof ImageInspect>;
export const ImageInspect = y.object({
  Id: y.string().required().optional(),
  RepoTags: y.array(y.string().required()).optional(),
  RepoDigests: y.array(y.string().required()).optional(),
  Parent: y.string().required().optional(),
  Comment: y.string().required().optional(),
  Created: y.string().required().optional(),
  Container: y.string().required().optional(),
  ContainerConfig: ContainerConfig.optional(),
  DockerVersion: y.string().required().optional(),
  Author: y.string().required().optional(),
  Config: ContainerConfig.optional(),
  Architecture: y.string().required().optional(),
  Variant: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Os: y.string().required().optional(),
  OsVersion: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Size: y.number().required().optional(),
  VirtualSize: y.number().required().optional(),
  GraphDriver: GraphDriverData.optional(),
  RootFS: y
    .object({
      Type: y.string().required(),
      Layers: y
        .mixed()
        .oneOf([
          y.array(y.string().required()),
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
    })
    .optional(),
  Metadata: y
    .object({
      LastTagTime: y
        .mixed()
        .oneOf([
          y.string().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
    })
    .optional(),
});

export type ImageSummary = y.InferType<typeof ImageSummary>;
export const ImageSummary = y.object({
  Id: y.string().required(),
  ParentId: y.string().required(),
  RepoTags: y.array(y.string().required()),
  RepoDigests: y.array(y.string().required()),
  Created: y.number().required(),
  Size: y.number().required(),
  SharedSize: y.number().required(),
  VirtualSize: y
    .mixed()
    .oneOf([y.number().required(), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  Labels: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  Containers: y.number().required(),
});

export type AuthConfig = y.InferType<typeof AuthConfig>;
export const AuthConfig = y.object({
  username: y.string().required().optional(),
  password: y.string().required().optional(),
  email: y.string().required().optional(),
  serveraddress: y.string().required().optional(),
});

export type ProcessConfig = y.InferType<typeof ProcessConfig>;
export const ProcessConfig = y.object({
  privileged: y.boolean().required().optional(),
  user: y.string().required().optional(),
  tty: y.boolean().required().optional(),
  entrypoint: y.string().required().optional(),
  arguments: y.array(y.string().required()).optional(),
});

export type ObjectVersion = y.InferType<typeof ObjectVersion>;
export const ObjectVersion = y.object({
  Index: y.number().required().optional(),
});

export type Topology = y.InferType<typeof Topology>;
export const Topology = y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>;

export type ClusterVolumeSpec = y.InferType<typeof ClusterVolumeSpec>;
export const ClusterVolumeSpec = y.object({
  Group: y.string().required().optional(),
  AccessMode: y
    .object({
      Scope: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "single" => value === "single").required(),
          y.mixed((value): value is "multi" => value === "multi").required(),
        ])
        .required()
        .optional(),
      Sharing: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "none" => value === "none").required(),
          y.mixed((value): value is "readonly" => value === "readonly").required(),
          y.mixed((value): value is "onewriter" => value === "onewriter").required(),
          y.mixed((value): value is "all" => value === "all").required(),
        ])
        .required()
        .optional(),
      MountVolume: y.object({}).optional(),
      Secrets: y
        .array(
          y.object({
            Key: y.string().required().optional(),
            Secret: y.string().required().optional(),
          }),
        )
        .optional(),
      AccessibilityRequirements: y
        .object({
          Requisite: y.array(Topology).optional(),
          Preferred: y.array(Topology).optional(),
        })
        .optional(),
      CapacityRange: y
        .object({
          RequiredBytes: y.number().required().optional(),
          LimitBytes: y.number().required().optional(),
        })
        .optional(),
      Availability: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "active" => value === "active").required(),
          y.mixed((value): value is "pause" => value === "pause").required(),
          y.mixed((value): value is "drain" => value === "drain").required(),
        ])
        .required()
        .optional(),
    })
    .optional(),
});

export type ClusterVolume = y.InferType<typeof ClusterVolume>;
export const ClusterVolume = y.object({
  ID: y.string().required().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: y.string().required().optional(),
  UpdatedAt: y.string().required().optional(),
  Spec: ClusterVolumeSpec.optional(),
  Info: y
    .object({
      CapacityBytes: y.number().required().optional(),
      VolumeContext: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
      VolumeID: y.string().required().optional(),
      AccessibleTopology: y.array(Topology).optional(),
    })
    .optional(),
  PublishStatus: y
    .array(
      y.object({
        NodeID: y.string().required().optional(),
        State: y
          .mixed()
          .oneOf([
            y.mixed((value): value is "pending-publish" => value === "pending-publish").required(),
            y.mixed((value): value is "published" => value === "published").required(),
            y.mixed((value): value is "pending-node-unpublish" => value === "pending-node-unpublish").required(),
            y
              .mixed((value): value is "pending-controller-unpublish" => value === "pending-controller-unpublish")
              .required(),
          ])
          .required()
          .optional(),
        PublishContext: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
      }),
    )
    .optional(),
});

export type Volume = y.InferType<typeof Volume>;
export const Volume = y.object({
  Name: y.string().required(),
  Driver: y.string().required(),
  Mountpoint: y.string().required(),
  CreatedAt: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  Status: y
    .mixed()
    .oneOf([
      y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
      y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
    ])
    .required()
    .optional(),
  Labels: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  Scope: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "local" => value === "local").required(),
      y.mixed((value): value is "global" => value === "global").required(),
    ])
    .required(),
  ClusterVolume: y
    .mixed()
    .oneOf([ClusterVolume, y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  Options: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
  UsageData: y
    .mixed()
    .oneOf([
      y.object({
        Size: y.number().required(),
        RefCount: y.number().required(),
      }),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
      y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
    ])
    .required()
    .optional(),
});

export type VolumeCreateOptions = y.InferType<typeof VolumeCreateOptions>;
export const VolumeCreateOptions = y.object({
  Name: y.string().required().optional(),
  Driver: y.string().required().optional(),
  DriverOpts: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  ClusterVolumeSpec: ClusterVolumeSpec.optional(),
});

export type VolumeListResponse = y.InferType<typeof VolumeListResponse>;
export const VolumeListResponse = y.object({
  Volumes: y.array(Volume).optional(),
  Warnings: y.array(y.string().required()).optional(),
});

export type IPAMConfig = y.InferType<typeof IPAMConfig>;
export const IPAMConfig = y.object({
  Subnet: y.string().required().optional(),
  IPRange: y.string().required().optional(),
  Gateway: y.string().required().optional(),
  AuxiliaryAddresses: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
});

export type IPAM = y.InferType<typeof IPAM>;
export const IPAM = y.object({
  Driver: y.string().required().optional(),
  Config: y.array(IPAMConfig).optional(),
  Options: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
});

export type NetworkContainer = y.InferType<typeof NetworkContainer>;
export const NetworkContainer = y.object({
  Name: y.string().required().optional(),
  EndpointID: y.string().required().optional(),
  MacAddress: y.string().required().optional(),
  IPv4Address: y.string().required().optional(),
  IPv6Address: y.string().required().optional(),
});

export type Network = y.InferType<typeof Network>;
export const Network = y.object({
  Name: y.string().required().optional(),
  Id: y.string().required().optional(),
  Created: y.string().required().optional(),
  Scope: y.string().required().optional(),
  Driver: y.string().required().optional(),
  EnableIPv6: y.boolean().required().optional(),
  IPAM: IPAM.optional(),
  Internal: y.boolean().required().optional(),
  Attachable: y.boolean().required().optional(),
  Ingress: y.boolean().required().optional(),
  Containers: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Options: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
});

export type ErrorDetail = y.InferType<typeof ErrorDetail>;
export const ErrorDetail = y.object({
  code: y.number().required().optional(),
  message: y.string().required().optional(),
});

export type ProgressDetail = y.InferType<typeof ProgressDetail>;
export const ProgressDetail = y.object({
  current: y.number().required().optional(),
  total: y.number().required().optional(),
});

export type ImageID = y.InferType<typeof ImageID>;
export const ImageID = y.object({
  ID: y.string().required().optional(),
});

export type BuildInfo = y.InferType<typeof BuildInfo>;
export const BuildInfo = y.object({
  id: y.string().required().optional(),
  stream: y.string().required().optional(),
  error: y.string().required().optional(),
  errorDetail: ErrorDetail.optional(),
  status: y.string().required().optional(),
  progress: y.string().required().optional(),
  progressDetail: ProgressDetail.optional(),
  aux: ImageID.optional(),
});

export type BuildCache = y.InferType<typeof BuildCache>;
export const BuildCache = y.object({
  ID: y.string().required().optional(),
  Parent: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Parents: y
    .mixed()
    .oneOf([
      y.array(y.string().required()),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
  Type: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "internal" => value === "internal").required(),
      y.mixed((value): value is "frontend" => value === "frontend").required(),
      y.mixed((value): value is "source.local" => value === "source.local").required(),
      y.mixed((value): value is "source.git.checkout" => value === "source.git.checkout").required(),
      y.mixed((value): value is "exec.cachemount" => value === "exec.cachemount").required(),
      y.mixed((value): value is "regular" => value === "regular").required(),
    ])
    .required()
    .optional(),
  Description: y.string().required().optional(),
  InUse: y.boolean().required().optional(),
  Shared: y.boolean().required().optional(),
  Size: y.number().required().optional(),
  CreatedAt: y.string().required().optional(),
  LastUsedAt: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  UsageCount: y.number().required().optional(),
});

export type CreateImageInfo = y.InferType<typeof CreateImageInfo>;
export const CreateImageInfo = y.object({
  id: y.string().required().optional(),
  error: y.string().required().optional(),
  errorDetail: ErrorDetail.optional(),
  status: y.string().required().optional(),
  progress: y.string().required().optional(),
  progressDetail: ProgressDetail.optional(),
});

export type PushImageInfo = y.InferType<typeof PushImageInfo>;
export const PushImageInfo = y.object({
  error: y.string().required().optional(),
  status: y.string().required().optional(),
  progress: y.string().required().optional(),
  progressDetail: ProgressDetail.optional(),
});

export type ErrorResponse = y.InferType<typeof ErrorResponse>;
export const ErrorResponse = y.object({
  message: y.string().required(),
});

export type IdResponse = y.InferType<typeof IdResponse>;
export const IdResponse = y.object({
  Id: y.string().required(),
});

export type PluginMount = y.InferType<typeof PluginMount>;
export const PluginMount = y.object({
  Name: y.string().required(),
  Description: y.string().required(),
  Settable: y.array(y.string().required()),
  Source: y.string().required(),
  Destination: y.string().required(),
  Type: y.string().required(),
  Options: y.array(y.string().required()),
});

export type PluginDevice = y.InferType<typeof PluginDevice>;
export const PluginDevice = y.object({
  Name: y.string().required(),
  Description: y.string().required(),
  Settable: y.array(y.string().required()),
  Path: y.string().required(),
});

export type PluginEnv = y.InferType<typeof PluginEnv>;
export const PluginEnv = y.object({
  Name: y.string().required(),
  Description: y.string().required(),
  Settable: y.array(y.string().required()),
  Value: y.string().required(),
});

export type PluginInterfaceType = y.InferType<typeof PluginInterfaceType>;
export const PluginInterfaceType = y.object({
  Prefix: y.string().required(),
  Capability: y.string().required(),
  Version: y.string().required(),
});

export type PluginPrivilege = y.InferType<typeof PluginPrivilege>;
export const PluginPrivilege = y.object({
  Name: y.string().required().optional(),
  Description: y.string().required().optional(),
  Value: y.array(y.string().required()).optional(),
});

export type Plugin = y.InferType<typeof Plugin>;
export const Plugin = y.object({
  Id: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  Name: y.string().required(),
  Enabled: y.boolean().required(),
  Settings: y.object({
    Mounts: y.array(PluginMount),
    Env: y.array(y.string().required()),
    Args: y.array(y.string().required()),
    Devices: y.array(PluginDevice),
  }),
  PluginReference: y
    .mixed()
    .oneOf([y.string().required(), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
  Config: y.object({
    DockerVersion: y
      .mixed()
      .oneOf([y.string().required(), y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
      .required()
      .optional(),
    Description: y.string().required(),
    Documentation: y.string().required(),
    Interface: y.object({
      Types: y.array(PluginInterfaceType),
      Socket: y.string().required(),
      ProtocolScheme: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "" => value === "").required(),
          y.mixed((value): value is "moby.plugins.http/v1" => value === "moby.plugins.http/v1").required(),
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
    }),
    Entrypoint: y.array(y.string().required()),
    WorkDir: y.string().required(),
    User: y
      .mixed()
      .oneOf([
        y.object({
          UID: y.number().required().optional(),
          GID: y.number().required().optional(),
        }),
        y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
      ])
      .required()
      .optional(),
    Network: y.object({
      Type: y.string().required(),
    }),
    Linux: y.object({
      Capabilities: y.array(y.string().required()),
      AllowAllDevices: y.boolean().required(),
      Devices: y.array(PluginDevice),
    }),
    PropagatedMount: y.string().required(),
    IpcHost: y.boolean().required(),
    PidHost: y.boolean().required(),
    Mounts: y.array(PluginMount),
    Env: y.array(PluginEnv),
    Args: y.object({
      Name: y.string().required(),
      Description: y.string().required(),
      Settable: y.array(y.string().required()),
      Value: y.array(y.string().required()),
    }),
    rootfs: y
      .mixed()
      .oneOf([
        y.object({
          type: y.string().required().optional(),
          diff_ids: y.array(y.string().required()).optional(),
        }),
        y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
      ])
      .required()
      .optional(),
  }),
});

export type NodeSpec = y.InferType<typeof NodeSpec>;
export const NodeSpec = y.object({
  Name: y.string().required().optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Role: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "worker" => value === "worker").required(),
      y.mixed((value): value is "manager" => value === "manager").required(),
    ])
    .required()
    .optional(),
  Availability: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "active" => value === "active").required(),
      y.mixed((value): value is "pause" => value === "pause").required(),
      y.mixed((value): value is "drain" => value === "drain").required(),
    ])
    .required()
    .optional(),
});

export type Platform = y.InferType<typeof Platform>;
export const Platform = y.object({
  Architecture: y.string().required().optional(),
  OS: y.string().required().optional(),
});

export type EngineDescription = y.InferType<typeof EngineDescription>;
export const EngineDescription = y.object({
  EngineVersion: y.string().required().optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Plugins: y
    .array(
      y.object({
        Type: y.string().required().optional(),
        Name: y.string().required().optional(),
      }),
    )
    .optional(),
});

export type TLSInfo = y.InferType<typeof TLSInfo>;
export const TLSInfo = y.object({
  TrustRoot: y.string().required().optional(),
  CertIssuerSubject: y.string().required().optional(),
  CertIssuerPublicKey: y.string().required().optional(),
});

export type NodeDescription = y.InferType<typeof NodeDescription>;
export const NodeDescription = y.object({
  Hostname: y.string().required().optional(),
  Platform: Platform.optional(),
  Resources: ResourceObject.optional(),
  Engine: EngineDescription.optional(),
  TLSInfo: TLSInfo.optional(),
});

export type NodeState = y.InferType<typeof NodeState>;
export const NodeState = y
  .mixed()
  .oneOf([
    y.mixed((value): value is "unknown" => value === "unknown").required(),
    y.mixed((value): value is "down" => value === "down").required(),
    y.mixed((value): value is "ready" => value === "ready").required(),
    y.mixed((value): value is "disconnected" => value === "disconnected").required(),
  ])
  .required();

export type NodeStatus = y.InferType<typeof NodeStatus>;
export const NodeStatus = y.object({
  State: NodeState.optional(),
  Message: y.string().required().optional(),
  Addr: y.string().required().optional(),
});

export type Reachability = y.InferType<typeof Reachability>;
export const Reachability = y
  .mixed()
  .oneOf([
    y.mixed((value): value is "unknown" => value === "unknown").required(),
    y.mixed((value): value is "unreachable" => value === "unreachable").required(),
    y.mixed((value): value is "reachable" => value === "reachable").required(),
  ])
  .required();

export type ManagerStatus = y.InferType<typeof ManagerStatus>;
export const ManagerStatus = y
  .mixed()
  .oneOf([
    y.object({
      Leader: y.boolean().required().optional(),
      Reachability: Reachability.optional(),
      Addr: y.string().required().optional(),
    }),
    y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
  ])
  .required();

export type Node = y.InferType<typeof Node>;
export const Node = y.object({
  ID: y.string().required().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: y.string().required().optional(),
  UpdatedAt: y.string().required().optional(),
  Spec: NodeSpec.optional(),
  Description: NodeDescription.optional(),
  Status: NodeStatus.optional(),
  ManagerStatus: ManagerStatus.optional(),
});

export type SwarmSpec = y.InferType<typeof SwarmSpec>;
export const SwarmSpec = y.object({
  Name: y.string().required().optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Orchestration: y
    .mixed()
    .oneOf([
      y.object({
        TaskHistoryRetentionLimit: y.number().required().optional(),
      }),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
  Raft: y
    .object({
      SnapshotInterval: y.number().required().optional(),
      KeepOldSnapshots: y.number().required().optional(),
      LogEntriesForSlowFollowers: y.number().required().optional(),
      ElectionTick: y.number().required().optional(),
      HeartbeatTick: y.number().required().optional(),
    })
    .optional(),
  Dispatcher: y
    .mixed()
    .oneOf([
      y.object({
        HeartbeatPeriod: y.number().required().optional(),
      }),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
  CAConfig: y
    .mixed()
    .oneOf([
      y.object({
        NodeCertExpiry: y.number().required().optional(),
        ExternalCAs: y
          .array(
            y.object({
              Protocol: y
                .mixed((value): value is "cfssl" => value === "cfssl")
                .required()
                .optional(),
              URL: y.string().required().optional(),
              Options: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
              CACert: y.string().required().optional(),
            }),
          )
          .optional(),
        SigningCACert: y.string().required().optional(),
        SigningCAKey: y.string().required().optional(),
        ForceRotate: y.number().required().optional(),
      }),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
  EncryptionConfig: y
    .object({
      AutoLockManagers: y.boolean().required().optional(),
    })
    .optional(),
  TaskDefaults: y
    .object({
      LogDriver: y
        .object({
          Name: y.string().required().optional(),
          Options: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
        })
        .optional(),
    })
    .optional(),
});

export type ClusterInfo = y.InferType<typeof ClusterInfo>;
export const ClusterInfo = y
  .mixed()
  .oneOf([
    y.object({
      ID: y.string().required().optional(),
      Version: ObjectVersion.optional(),
      CreatedAt: y.string().required().optional(),
      UpdatedAt: y.string().required().optional(),
      Spec: SwarmSpec.optional(),
      TLSInfo: TLSInfo.optional(),
      RootRotationInProgress: y.boolean().required().optional(),
      DataPathPort: y.number().required().optional(),
      DefaultAddrPool: y.array(y.string().required()).optional(),
      SubnetSize: y.number().required().optional(),
    }),
    y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
  ])
  .required();

export type JoinTokens = y.InferType<typeof JoinTokens>;
export const JoinTokens = y.object({
  Worker: y.string().required().optional(),
  Manager: y.string().required().optional(),
});

export type Swarm = y.InferType<typeof Swarm>;
export const Swarm = y.mixed(/* unsupported */);

export type NetworkAttachmentConfig = y.InferType<typeof NetworkAttachmentConfig>;
export const NetworkAttachmentConfig = y.object({
  Target: y.string().required().optional(),
  Aliases: y.array(y.string().required()).optional(),
  DriverOpts: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
});

export type TaskSpec = y.InferType<typeof TaskSpec>;
export const TaskSpec = y.object({
  PluginSpec: y
    .object({
      Name: y.string().required().optional(),
      Remote: y.string().required().optional(),
      Disabled: y.boolean().required().optional(),
      PluginPrivilege: y.array(PluginPrivilege).optional(),
    })
    .optional(),
  ContainerSpec: y
    .object({
      Image: y.string().required().optional(),
      Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
      Command: y.array(y.string().required()).optional(),
      Args: y.array(y.string().required()).optional(),
      Hostname: y.string().required().optional(),
      Env: y.array(y.string().required()).optional(),
      Dir: y.string().required().optional(),
      User: y.string().required().optional(),
      Groups: y.array(y.string().required()).optional(),
      Privileges: y
        .object({
          CredentialSpec: y
            .object({
              Config: y.string().required().optional(),
              File: y.string().required().optional(),
              Registry: y.string().required().optional(),
            })
            .optional(),
          SELinuxContext: y
            .object({
              Disable: y.boolean().required().optional(),
              User: y.string().required().optional(),
              Role: y.string().required().optional(),
              Type: y.string().required().optional(),
              Level: y.string().required().optional(),
            })
            .optional(),
        })
        .optional(),
      TTY: y.boolean().required().optional(),
      OpenStdin: y.boolean().required().optional(),
      ReadOnly: y.boolean().required().optional(),
      Mounts: y.array(Mount).optional(),
      StopSignal: y.string().required().optional(),
      StopGracePeriod: y.number().required().optional(),
      HealthCheck: HealthConfig.optional(),
      Hosts: y.array(y.string().required()).optional(),
      DNSConfig: y
        .object({
          Nameservers: y.array(y.string().required()).optional(),
          Search: y.array(y.string().required()).optional(),
          Options: y.array(y.string().required()).optional(),
        })
        .optional(),
      Secrets: y
        .array(
          y.object({
            File: y
              .object({
                Name: y.string().required().optional(),
                UID: y.string().required().optional(),
                GID: y.string().required().optional(),
                Mode: y.number().required().optional(),
              })
              .optional(),
            SecretID: y.string().required().optional(),
            SecretName: y.string().required().optional(),
          }),
        )
        .optional(),
      Configs: y
        .array(
          y.object({
            File: y
              .object({
                Name: y.string().required().optional(),
                UID: y.string().required().optional(),
                GID: y.string().required().optional(),
                Mode: y.number().required().optional(),
              })
              .optional(),
            Runtime: y.object({}).optional(),
            ConfigID: y.string().required().optional(),
            ConfigName: y.string().required().optional(),
          }),
        )
        .optional(),
      Isolation: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "default" => value === "default").required(),
          y.mixed((value): value is "process" => value === "process").required(),
          y.mixed((value): value is "hyperv" => value === "hyperv").required(),
        ])
        .required()
        .optional(),
      Init: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      Sysctls: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
      CapabilityAdd: y.array(y.string().required()).optional(),
      CapabilityDrop: y.array(y.string().required()).optional(),
      Ulimits: y
        .array(
          y.object({
            Name: y.string().required().optional(),
            Soft: y.number().required().optional(),
            Hard: y.number().required().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  NetworkAttachmentSpec: y
    .object({
      ContainerID: y.string().required().optional(),
    })
    .optional(),
  Resources: y
    .object({
      Limits: Limit.optional(),
      Reservations: ResourceObject.optional(),
    })
    .optional(),
  RestartPolicy: y
    .object({
      Condition: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "none" => value === "none").required(),
          y.mixed((value): value is "on-failure" => value === "on-failure").required(),
          y.mixed((value): value is "any" => value === "any").required(),
        ])
        .required()
        .optional(),
      Delay: y.number().required().optional(),
      MaxAttempts: y.number().required().optional(),
      Window: y.number().required().optional(),
    })
    .optional(),
  Placement: y
    .object({
      Constraints: y.array(y.string().required()).optional(),
      Preferences: y
        .array(
          y.object({
            Spread: y
              .object({
                SpreadDescriptor: y.string().required().optional(),
              })
              .optional(),
          }),
        )
        .optional(),
      MaxReplicas: y.number().required().optional(),
      Platforms: y.array(Platform).optional(),
    })
    .optional(),
  ForceUpdate: y.number().required().optional(),
  Runtime: y.string().required().optional(),
  Networks: y.array(NetworkAttachmentConfig).optional(),
  LogDriver: y
    .object({
      Name: y.string().required().optional(),
      Options: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
    })
    .optional(),
});

export type TaskState = y.InferType<typeof TaskState>;
export const TaskState = y
  .mixed()
  .oneOf([
    y.mixed((value): value is "new" => value === "new").required(),
    y.mixed((value): value is "allocated" => value === "allocated").required(),
    y.mixed((value): value is "pending" => value === "pending").required(),
    y.mixed((value): value is "assigned" => value === "assigned").required(),
    y.mixed((value): value is "accepted" => value === "accepted").required(),
    y.mixed((value): value is "preparing" => value === "preparing").required(),
    y.mixed((value): value is "ready" => value === "ready").required(),
    y.mixed((value): value is "starting" => value === "starting").required(),
    y.mixed((value): value is "running" => value === "running").required(),
    y.mixed((value): value is "complete" => value === "complete").required(),
    y.mixed((value): value is "shutdown" => value === "shutdown").required(),
    y.mixed((value): value is "failed" => value === "failed").required(),
    y.mixed((value): value is "rejected" => value === "rejected").required(),
    y.mixed((value): value is "remove" => value === "remove").required(),
    y.mixed((value): value is "orphaned" => value === "orphaned").required(),
  ])
  .required();

export type Task = y.InferType<typeof Task>;
export const Task = y.object({
  ID: y.string().required().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: y.string().required().optional(),
  UpdatedAt: y.string().required().optional(),
  Name: y.string().required().optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Spec: TaskSpec.optional(),
  ServiceID: y.string().required().optional(),
  Slot: y.number().required().optional(),
  NodeID: y.string().required().optional(),
  AssignedGenericResources: GenericResources.optional(),
  Status: y
    .object({
      Timestamp: y.string().required().optional(),
      State: TaskState.optional(),
      Message: y.string().required().optional(),
      Err: y.string().required().optional(),
      ContainerStatus: y
        .object({
          ContainerID: y.string().required().optional(),
          PID: y.number().required().optional(),
          ExitCode: y.number().required().optional(),
        })
        .optional(),
    })
    .optional(),
  DesiredState: TaskState.optional(),
  JobIteration: ObjectVersion.optional(),
});

export type EndpointPortConfig = y.InferType<typeof EndpointPortConfig>;
export const EndpointPortConfig = y.object({
  Name: y.string().required().optional(),
  Protocol: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "tcp" => value === "tcp").required(),
      y.mixed((value): value is "udp" => value === "udp").required(),
      y.mixed((value): value is "sctp" => value === "sctp").required(),
    ])
    .required()
    .optional(),
  TargetPort: y.number().required().optional(),
  PublishedPort: y.number().required().optional(),
  PublishMode: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "ingress" => value === "ingress").required(),
      y.mixed((value): value is "host" => value === "host").required(),
    ])
    .required()
    .optional(),
});

export type EndpointSpec = y.InferType<typeof EndpointSpec>;
export const EndpointSpec = y.object({
  Mode: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "vip" => value === "vip").required(),
      y.mixed((value): value is "dnsrr" => value === "dnsrr").required(),
    ])
    .required()
    .optional(),
  Ports: y.array(EndpointPortConfig).optional(),
});

export type ServiceSpec = y.InferType<typeof ServiceSpec>;
export const ServiceSpec = y.object({
  Name: y.string().required().optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  TaskTemplate: TaskSpec.optional(),
  Mode: y
    .object({
      Replicated: y
        .object({
          Replicas: y.number().required().optional(),
        })
        .optional(),
      Global: y.object({}).optional(),
      ReplicatedJob: y
        .object({
          MaxConcurrent: y.number().required().optional(),
          TotalCompletions: y.number().required().optional(),
        })
        .optional(),
      GlobalJob: y.object({}).optional(),
    })
    .optional(),
  UpdateConfig: y
    .object({
      Parallelism: y.number().required().optional(),
      Delay: y.number().required().optional(),
      FailureAction: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "continue" => value === "continue").required(),
          y.mixed((value): value is "pause" => value === "pause").required(),
          y.mixed((value): value is "rollback" => value === "rollback").required(),
        ])
        .required()
        .optional(),
      Monitor: y.number().required().optional(),
      MaxFailureRatio: y.number().required().optional(),
      Order: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "stop-first" => value === "stop-first").required(),
          y.mixed((value): value is "start-first" => value === "start-first").required(),
        ])
        .required()
        .optional(),
    })
    .optional(),
  RollbackConfig: y
    .object({
      Parallelism: y.number().required().optional(),
      Delay: y.number().required().optional(),
      FailureAction: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "continue" => value === "continue").required(),
          y.mixed((value): value is "pause" => value === "pause").required(),
        ])
        .required()
        .optional(),
      Monitor: y.number().required().optional(),
      MaxFailureRatio: y.number().required().optional(),
      Order: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "stop-first" => value === "stop-first").required(),
          y.mixed((value): value is "start-first" => value === "start-first").required(),
        ])
        .required()
        .optional(),
    })
    .optional(),
  Networks: y.array(NetworkAttachmentConfig).optional(),
  EndpointSpec: EndpointSpec.optional(),
});

export type Service = y.InferType<typeof Service>;
export const Service = y.object({
  ID: y.string().required().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: y.string().required().optional(),
  UpdatedAt: y.string().required().optional(),
  Spec: ServiceSpec.optional(),
  Endpoint: y
    .object({
      Spec: EndpointSpec.optional(),
      Ports: y.array(EndpointPortConfig).optional(),
      VirtualIPs: y
        .array(
          y.object({
            NetworkID: y.string().required().optional(),
            Addr: y.string().required().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  UpdateStatus: y
    .object({
      State: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "updating" => value === "updating").required(),
          y.mixed((value): value is "paused" => value === "paused").required(),
          y.mixed((value): value is "completed" => value === "completed").required(),
        ])
        .required()
        .optional(),
      StartedAt: y.string().required().optional(),
      CompletedAt: y.string().required().optional(),
      Message: y.string().required().optional(),
    })
    .optional(),
  ServiceStatus: y
    .object({
      RunningTasks: y.number().required().optional(),
      DesiredTasks: y.number().required().optional(),
      CompletedTasks: y.number().required().optional(),
    })
    .optional(),
  JobStatus: y
    .object({
      JobIteration: ObjectVersion.optional(),
      LastExecution: y.string().required().optional(),
    })
    .optional(),
});

export type ImageDeleteResponseItem = y.InferType<typeof ImageDeleteResponseItem>;
export const ImageDeleteResponseItem = y.object({
  Untagged: y.string().required().optional(),
  Deleted: y.string().required().optional(),
});

export type ServiceUpdateResponse = y.InferType<typeof ServiceUpdateResponse>;
export const ServiceUpdateResponse = y.object({
  Warnings: y.array(y.string().required()).optional(),
});

export type ContainerSummary = y.InferType<typeof ContainerSummary>;
export const ContainerSummary = y.object({
  Id: y.string().required().optional(),
  Names: y.array(y.string().required()).optional(),
  Image: y.string().required().optional(),
  ImageID: y.string().required().optional(),
  Command: y.string().required().optional(),
  Created: y.number().required().optional(),
  Ports: y.array(Port).optional(),
  SizeRw: y.number().required().optional(),
  SizeRootFs: y.number().required().optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  State: y.string().required().optional(),
  Status: y.string().required().optional(),
  HostConfig: y
    .object({
      NetworkMode: y.string().required().optional(),
    })
    .optional(),
  NetworkSettings: y
    .object({
      Networks: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
    })
    .optional(),
  Mounts: y.array(MountPoint).optional(),
});

export type Driver = y.InferType<typeof Driver>;
export const Driver = y.object({
  Name: y.string().required(),
  Options: y
    .mixed()
    .oneOf([
      y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
      y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
    ])
    .required()
    .optional(),
});

export type SecretSpec = y.InferType<typeof SecretSpec>;
export const SecretSpec = y.object({
  Name: y.string().required().optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Data: y.string().required().optional(),
  Driver: Driver.optional(),
  Templating: Driver.optional(),
});

export type Secret = y.InferType<typeof Secret>;
export const Secret = y.object({
  ID: y.string().required().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: y.string().required().optional(),
  UpdatedAt: y.string().required().optional(),
  Spec: SecretSpec.optional(),
});

export type ConfigSpec = y.InferType<typeof ConfigSpec>;
export const ConfigSpec = y.object({
  Name: y.string().required().optional(),
  Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  Data: y.string().required().optional(),
  Templating: Driver.optional(),
});

export type Config = y.InferType<typeof Config>;
export const Config = y.object({
  ID: y.string().required().optional(),
  Version: ObjectVersion.optional(),
  CreatedAt: y.string().required().optional(),
  UpdatedAt: y.string().required().optional(),
  Spec: ConfigSpec.optional(),
});

export type ContainerState = y.InferType<typeof ContainerState>;
export const ContainerState = y
  .mixed()
  .oneOf([
    y.object({
      Status: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "created" => value === "created").required(),
          y.mixed((value): value is "running" => value === "running").required(),
          y.mixed((value): value is "paused" => value === "paused").required(),
          y.mixed((value): value is "restarting" => value === "restarting").required(),
          y.mixed((value): value is "removing" => value === "removing").required(),
          y.mixed((value): value is "exited" => value === "exited").required(),
          y.mixed((value): value is "dead" => value === "dead").required(),
        ])
        .required()
        .optional(),
      Running: y.boolean().required().optional(),
      Paused: y.boolean().required().optional(),
      Restarting: y.boolean().required().optional(),
      OOMKilled: y.boolean().required().optional(),
      Dead: y.boolean().required().optional(),
      Pid: y.number().required().optional(),
      ExitCode: y.number().required().optional(),
      Error: y.string().required().optional(),
      StartedAt: y.string().required().optional(),
      FinishedAt: y.string().required().optional(),
      Health: Health.optional(),
    }),
    y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
  ])
  .required();

export type ContainerCreateResponse = y.InferType<typeof ContainerCreateResponse>;
export const ContainerCreateResponse = y.object({
  Id: y.string().required(),
  Warnings: y.array(y.string().required()),
});

export type ContainerWaitExitError = y.InferType<typeof ContainerWaitExitError>;
export const ContainerWaitExitError = y.object({
  Message: y.string().required().optional(),
});

export type ContainerWaitResponse = y.InferType<typeof ContainerWaitResponse>;
export const ContainerWaitResponse = y.object({
  StatusCode: y.number().required(),
  Error: y
    .mixed()
    .oneOf([ContainerWaitExitError, y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
    .required()
    .optional(),
});

export type SystemVersion = y.InferType<typeof SystemVersion>;
export const SystemVersion = y.object({
  Platform: y
    .object({
      Name: y.string().required(),
    })
    .optional(),
  Components: y
    .array(
      y.object({
        Name: y.string().required(),
        Version: y.string().required(),
        Details: y
          .mixed()
          .oneOf([
            y.object({}),
            y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
            y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
          ])
          .required()
          .optional(),
      }),
    )
    .optional(),
  Version: y.string().required().optional(),
  ApiVersion: y.string().required().optional(),
  MinAPIVersion: y.string().required().optional(),
  GitCommit: y.string().required().optional(),
  GoVersion: y.string().required().optional(),
  Os: y.string().required().optional(),
  Arch: y.string().required().optional(),
  KernelVersion: y.string().required().optional(),
  Experimental: y.boolean().required().optional(),
  BuildTime: y.string().required().optional(),
});

export type PluginsInfo = y.InferType<typeof PluginsInfo>;
export const PluginsInfo = y.object({
  Volume: y.array(y.string().required()).optional(),
  Network: y.array(y.string().required()).optional(),
  Authorization: y.array(y.string().required()).optional(),
  Log: y.array(y.string().required()).optional(),
});

export type IndexInfo = y.InferType<typeof IndexInfo>;
export const IndexInfo = y
  .mixed()
  .oneOf([
    y.object({
      Name: y.string().required().optional(),
      Mirrors: y.array(y.string().required()).optional(),
      Secure: y.boolean().required().optional(),
      Official: y.boolean().required().optional(),
    }),
    y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
  ])
  .required();

export type RegistryServiceConfig = y.InferType<typeof RegistryServiceConfig>;
export const RegistryServiceConfig = y
  .mixed()
  .oneOf([
    y.object({
      AllowNondistributableArtifactsCIDRs: y.array(y.string().required()).optional(),
      AllowNondistributableArtifactsHostnames: y.array(y.string().required()).optional(),
      InsecureRegistryCIDRs: y.array(y.string().required()).optional(),
      IndexConfigs: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
      Mirrors: y.array(y.string().required()).optional(),
    }),
    y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
  ])
  .required();

export type Runtime = y.InferType<typeof Runtime>;
export const Runtime = y.object({
  path: y.string().required().optional(),
  runtimeArgs: y
    .mixed()
    .oneOf([
      y.array(y.string().required()),
      y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
    ])
    .required()
    .optional(),
});

export type LocalNodeState = y.InferType<typeof LocalNodeState>;
export const LocalNodeState = y
  .mixed()
  .oneOf([
    y.mixed((value): value is "" => value === "").required(),
    y.mixed((value): value is "inactive" => value === "inactive").required(),
    y.mixed((value): value is "pending" => value === "pending").required(),
    y.mixed((value): value is "active" => value === "active").required(),
    y.mixed((value): value is "error" => value === "error").required(),
    y.mixed((value): value is "locked" => value === "locked").required(),
  ])
  .required();

export type PeerNode = y.InferType<typeof PeerNode>;
export const PeerNode = y.object({
  NodeID: y.string().required().optional(),
  Addr: y.string().required().optional(),
});

export type SwarmInfo = y.InferType<typeof SwarmInfo>;
export const SwarmInfo = y.object({
  NodeID: y.string().required().optional(),
  NodeAddr: y.string().required().optional(),
  LocalNodeState: LocalNodeState.optional(),
  ControlAvailable: y.boolean().required().optional(),
  Error: y.string().required().optional(),
  RemoteManagers: y
    .mixed()
    .oneOf([y.array(PeerNode), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Nodes: y
    .mixed()
    .oneOf([y.number().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Managers: y
    .mixed()
    .oneOf([y.number().required(), y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>])
    .required()
    .optional(),
  Cluster: ClusterInfo.optional(),
});

export type Commit = y.InferType<typeof Commit>;
export const Commit = y.object({
  ID: y.string().required().optional(),
  Expected: y.string().required().optional(),
});

export type SystemInfo = y.InferType<typeof SystemInfo>;
export const SystemInfo = y.object({
  ID: y.string().required().optional(),
  Containers: y.number().required().optional(),
  ContainersRunning: y.number().required().optional(),
  ContainersPaused: y.number().required().optional(),
  ContainersStopped: y.number().required().optional(),
  Images: y.number().required().optional(),
  Driver: y.string().required().optional(),
  DriverStatus: y.array(y.array(y.string().required())).optional(),
  DockerRootDir: y.string().required().optional(),
  Plugins: PluginsInfo.optional(),
  MemoryLimit: y.boolean().required().optional(),
  SwapLimit: y.boolean().required().optional(),
  KernelMemoryTCP: y.boolean().required().optional(),
  CpuCfsPeriod: y.boolean().required().optional(),
  CpuCfsQuota: y.boolean().required().optional(),
  CPUShares: y.boolean().required().optional(),
  CPUSet: y.boolean().required().optional(),
  PidsLimit: y.boolean().required().optional(),
  OomKillDisable: y.boolean().required().optional(),
  IPv4Forwarding: y.boolean().required().optional(),
  BridgeNfIptables: y.boolean().required().optional(),
  BridgeNfIp6tables: y.boolean().required().optional(),
  Debug: y.boolean().required().optional(),
  NFd: y.number().required().optional(),
  NGoroutines: y.number().required().optional(),
  SystemTime: y.string().required().optional(),
  LoggingDriver: y.string().required().optional(),
  CgroupDriver: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "cgroupfs" => value === "cgroupfs").required(),
      y.mixed((value): value is "systemd" => value === "systemd").required(),
      y.mixed((value): value is "none" => value === "none").required(),
    ])
    .required()
    .optional(),
  CgroupVersion: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "1" => value === "1").required(),
      y.mixed((value): value is "2" => value === "2").required(),
    ])
    .required()
    .optional(),
  NEventsListener: y.number().required().optional(),
  KernelVersion: y.string().required().optional(),
  OperatingSystem: y.string().required().optional(),
  OSVersion: y.string().required().optional(),
  OSType: y.string().required().optional(),
  Architecture: y.string().required().optional(),
  NCPU: y.number().required().optional(),
  MemTotal: y.number().required().optional(),
  IndexServerAddress: y.string().required().optional(),
  RegistryConfig: RegistryServiceConfig.optional(),
  GenericResources: GenericResources.optional(),
  HttpProxy: y.string().required().optional(),
  HttpsProxy: y.string().required().optional(),
  NoProxy: y.string().required().optional(),
  Name: y.string().required().optional(),
  Labels: y.array(y.string().required()).optional(),
  ExperimentalBuild: y.boolean().required().optional(),
  ServerVersion: y.string().required().optional(),
  Runtimes: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
  DefaultRuntime: y.string().required().optional(),
  Swarm: SwarmInfo.optional(),
  LiveRestoreEnabled: y.boolean().required().optional(),
  Isolation: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "default" => value === "default").required(),
      y.mixed((value): value is "hyperv" => value === "hyperv").required(),
      y.mixed((value): value is "process" => value === "process").required(),
    ])
    .required()
    .optional(),
  InitBinary: y.string().required().optional(),
  ContainerdCommit: Commit.optional(),
  RuncCommit: Commit.optional(),
  InitCommit: Commit.optional(),
  SecurityOptions: y.array(y.string().required()).optional(),
  ProductLicense: y.string().required().optional(),
  DefaultAddressPools: y
    .array(
      y.object({
        Base: y.string().required().optional(),
        Size: y.number().required().optional(),
      }),
    )
    .optional(),
  Warnings: y.array(y.string().required()).optional(),
});

export type EventActor = y.InferType<typeof EventActor>;
export const EventActor = y.object({
  ID: y.string().required().optional(),
  Attributes: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
});

export type EventMessage = y.InferType<typeof EventMessage>;
export const EventMessage = y.object({
  Type: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "builder" => value === "builder").required(),
      y.mixed((value): value is "config" => value === "config").required(),
      y.mixed((value): value is "container" => value === "container").required(),
      y.mixed((value): value is "daemon" => value === "daemon").required(),
      y.mixed((value): value is "image" => value === "image").required(),
      y.mixed((value): value is "network" => value === "network").required(),
      y.mixed((value): value is "node" => value === "node").required(),
      y.mixed((value): value is "plugin" => value === "plugin").required(),
      y.mixed((value): value is "secret" => value === "secret").required(),
      y.mixed((value): value is "service" => value === "service").required(),
      y.mixed((value): value is "volume" => value === "volume").required(),
    ])
    .required()
    .optional(),
  Action: y.string().required().optional(),
  Actor: EventActor.optional(),
  scope: y
    .mixed()
    .oneOf([
      y.mixed((value): value is "local" => value === "local").required(),
      y.mixed((value): value is "swarm" => value === "swarm").required(),
    ])
    .required()
    .optional(),
  time: y.number().required().optional(),
  timeNano: y.number().required().optional(),
});

export type OCIDescriptor = y.InferType<typeof OCIDescriptor>;
export const OCIDescriptor = y.object({
  mediaType: y.string().required().optional(),
  digest: y.string().required().optional(),
  size: y.number().required().optional(),
});

export type OCIPlatform = y.InferType<typeof OCIPlatform>;
export const OCIPlatform = y.object({
  architecture: y.string().required().optional(),
  os: y.string().required().optional(),
  "os.version": y.string().required().optional(),
  "os.features": y.array(y.string().required()).optional(),
  variant: y.string().required().optional(),
});

export type DistributionInspect = y.InferType<typeof DistributionInspect>;
export const DistributionInspect = y.object({
  Descriptor: OCIDescriptor,
  Platforms: y.array(OCIPlatform),
});

export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/json" => value === "/containers/json").required(),
  parameters: y.object({
    query: y.object({
      all: y.boolean().required().optional(),
      limit: y.number().required().optional(),
      size: y.boolean().required().optional(),
      filters: y.string().required().optional(),
    }),
  }),
  response: y.array(ContainerSummary),
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/create" => value === "/containers/create").required(),
  parameters: y.object({
    query: y.object({
      name: y.string().required().optional(),
      platform: y.string().required().optional(),
    }),
    body: y.object({
      Hostname: y.string().required().optional(),
      Domainname: y.string().required().optional(),
      User: y.string().required().optional(),
      AttachStdin: y.boolean().required().optional(),
      AttachStdout: y.boolean().required().optional(),
      AttachStderr: y.boolean().required().optional(),
      ExposedPorts: y
        .mixed()
        .oneOf([
          y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      Tty: y.boolean().required().optional(),
      OpenStdin: y.boolean().required().optional(),
      StdinOnce: y.boolean().required().optional(),
      Env: y.array(y.string().required()).optional(),
      Cmd: y.array(y.string().required()).optional(),
      Healthcheck: HealthConfig.optional(),
      ArgsEscaped: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      Image: y.string().required().optional(),
      Volumes: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
      WorkingDir: y.string().required().optional(),
      Entrypoint: y.array(y.string().required()).optional(),
      NetworkDisabled: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      MacAddress: y
        .mixed()
        .oneOf([
          y.string().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      OnBuild: y
        .mixed()
        .oneOf([
          y.array(y.string().required()),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      Labels: (y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>).optional(),
      StopSignal: y
        .mixed()
        .oneOf([
          y.string().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      StopTimeout: y
        .mixed()
        .oneOf([
          y.number().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      Shell: y
        .mixed()
        .oneOf([
          y.array(y.string().required()),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      HostConfig: HostConfig.optional(),
      NetworkingConfig: NetworkingConfig.optional(),
    }),
  }),
  response: ContainerCreateResponse,
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/{id}/json" => value === "/containers/{id}/json").required(),
  parameters: y.object({
    query: y.object({
      size: y.boolean().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.object({
    Id: y.string().required().optional(),
    Created: y.string().required().optional(),
    Path: y.string().required().optional(),
    Args: y.array(y.string().required()).optional(),
    State: ContainerState.optional(),
    Image: y.string().required().optional(),
    ResolvConfPath: y.string().required().optional(),
    HostnamePath: y.string().required().optional(),
    HostsPath: y.string().required().optional(),
    LogPath: y.string().required().optional(),
    Name: y.string().required().optional(),
    RestartCount: y.number().required().optional(),
    Driver: y.string().required().optional(),
    Platform: y.string().required().optional(),
    MountLabel: y.string().required().optional(),
    ProcessLabel: y.string().required().optional(),
    AppArmorProfile: y.string().required().optional(),
    ExecIDs: y
      .mixed()
      .oneOf([
        y.array(y.string().required()),
        y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
      ])
      .required()
      .optional(),
    HostConfig: HostConfig.optional(),
    GraphDriver: GraphDriverData.optional(),
    SizeRw: y.number().required().optional(),
    SizeRootFs: y.number().required().optional(),
    Mounts: y.array(MountPoint).optional(),
    Config: ContainerConfig.optional(),
    NetworkSettings: NetworkSettings.optional(),
  }),
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/{id}/top" => value === "/containers/{id}/top").required(),
  parameters: y.object({
    query: y.object({
      ps_args: y.string().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.object({
    Titles: y.array(y.string().required()).optional(),
    Processes: y.array(y.array(y.string().required())).optional(),
  }),
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/{id}/logs" => value === "/containers/{id}/logs").required(),
  parameters: y.object({
    query: y.object({
      follow: y.boolean().required().optional(),
      stdout: y.boolean().required().optional(),
      stderr: y.boolean().required().optional(),
      since: y.number().required().optional(),
      until: y.number().required().optional(),
      timestamps: y.boolean().required().optional(),
      tail: y.string().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/{id}/changes" => value === "/containers/{id}/changes").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.array(FilesystemChange),
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/{id}/export" => value === "/containers/{id}/export").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/{id}/stats" => value === "/containers/{id}/stats").required(),
  parameters: y.object({
    query: y.object({
      stream: y.boolean().required().optional(),
      "one-shot": y.boolean().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/resize" => value === "/containers/{id}/resize").required(),
  parameters: y.object({
    query: y.object({
      h: y.number().required().optional(),
      w: y.number().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/start" => value === "/containers/{id}/start").required(),
  parameters: y.object({
    query: y.object({
      detachKeys: y.string().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/stop" => value === "/containers/{id}/stop").required(),
  parameters: y.object({
    query: y.object({
      signal: y.string().required().optional(),
      t: y.number().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/restart" => value === "/containers/{id}/restart").required(),
  parameters: y.object({
    query: y.object({
      signal: y.string().required().optional(),
      t: y.number().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/kill" => value === "/containers/{id}/kill").required(),
  parameters: y.object({
    query: y.object({
      signal: y.string().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/update" => value === "/containers/{id}/update").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
    body: y.object({
      CpuShares: y.number().required().optional(),
      Memory: y.number().required().optional(),
      CgroupParent: y.string().required().optional(),
      BlkioWeight: y.number().required().optional(),
      BlkioWeightDevice: y
        .array(
          y.object({
            Path: y.string().required().optional(),
            Weight: y.number().required().optional(),
          }),
        )
        .optional(),
      BlkioDeviceReadBps: y.array(ThrottleDevice).optional(),
      BlkioDeviceWriteBps: y.array(ThrottleDevice).optional(),
      BlkioDeviceReadIOps: y.array(ThrottleDevice).optional(),
      BlkioDeviceWriteIOps: y.array(ThrottleDevice).optional(),
      CpuPeriod: y.number().required().optional(),
      CpuQuota: y.number().required().optional(),
      CpuRealtimePeriod: y.number().required().optional(),
      CpuRealtimeRuntime: y.number().required().optional(),
      CpusetCpus: y.string().required().optional(),
      CpusetMems: y.string().required().optional(),
      Devices: y.array(DeviceMapping).optional(),
      DeviceCgroupRules: y.array(y.string().required()).optional(),
      DeviceRequests: y.array(DeviceRequest).optional(),
      KernelMemoryTCP: y.number().required().optional(),
      MemoryReservation: y.number().required().optional(),
      MemorySwap: y.number().required().optional(),
      MemorySwappiness: y.number().required().optional(),
      NanoCpus: y.number().required().optional(),
      OomKillDisable: y.boolean().required().optional(),
      Init: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      PidsLimit: y
        .mixed()
        .oneOf([
          y.number().required(),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      Ulimits: y
        .array(
          y.object({
            Name: y.string().required().optional(),
            Soft: y.number().required().optional(),
            Hard: y.number().required().optional(),
          }),
        )
        .optional(),
      CpuCount: y.number().required().optional(),
      CpuPercent: y.number().required().optional(),
      IOMaximumIOps: y.number().required().optional(),
      IOMaximumBandwidth: y.number().required().optional(),
      RestartPolicy: RestartPolicy.optional(),
    }),
  }),
  response: y.object({
    Warnings: y.array(y.string().required()).optional(),
  }),
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/rename" => value === "/containers/{id}/rename").required(),
  parameters: y.object({
    query: y.object({
      name: y.string().required(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/pause" => value === "/containers/{id}/pause").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/unpause" => value === "/containers/{id}/unpause").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/attach" => value === "/containers/{id}/attach").required(),
  parameters: y.object({
    query: y.object({
      detachKeys: y.string().required().optional(),
      logs: y.boolean().required().optional(),
      stream: y.boolean().required().optional(),
      stdin: y.boolean().required().optional(),
      stdout: y.boolean().required().optional(),
      stderr: y.boolean().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/{id}/attach/ws" => value === "/containers/{id}/attach/ws").required(),
  parameters: y.object({
    query: y.object({
      detachKeys: y.string().required().optional(),
      logs: y.boolean().required().optional(),
      stream: y.boolean().required().optional(),
      stdin: y.boolean().required().optional(),
      stdout: y.boolean().required().optional(),
      stderr: y.boolean().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/wait" => value === "/containers/{id}/wait").required(),
  parameters: y.object({
    query: y.object({
      condition: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "not-running" => value === "not-running").required(),
          y.mixed((value): value is "next-exit" => value === "next-exit").required(),
          y.mixed((value): value is "removed" => value === "removed").required(),
        ])
        .required()
        .optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: ContainerWaitResponse,
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/containers/{id}" => value === "/containers/{id}").required(),
  parameters: y.object({
    query: y.object({
      v: y.boolean().required().optional(),
      force: y.boolean().required().optional(),
      link: y.boolean().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/containers/{id}/archive" => value === "/containers/{id}/archive").required(),
  parameters: y.object({
    query: y.object({
      path: y.string().required(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: y.mixed((value): value is "PUT" => value === "PUT").required(),
  path: y.mixed((value): value is "/containers/{id}/archive" => value === "/containers/{id}/archive").required(),
  parameters: y.object({
    query: y.object({
      path: y.string().required(),
      noOverwriteDirNonDir: y.string().required(),
      copyUIDGID: y.string().required(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
    body: y.string().required(),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: y.mixed((value): value is "HEAD" => value === "HEAD").required(),
  path: y.mixed((value): value is "/containers/{id}/archive" => value === "/containers/{id}/archive").required(),
  parameters: y.object({
    query: y.object({
      path: y.string().required(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/prune" => value === "/containers/prune").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.object({
    ContainersDeleted: y.array(y.string().required()).optional(),
    SpaceReclaimed: y.number().required().optional(),
  }),
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/images/json" => value === "/images/json").required(),
  parameters: y.object({
    query: y.object({
      all: y.boolean().required().optional(),
      filters: y.string().required().optional(),
      "shared-size": y.boolean().required().optional(),
      digests: y.boolean().required().optional(),
    }),
  }),
  response: y.array(ImageSummary),
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/build" => value === "/build").required(),
  parameters: y.object({
    query: y.object({
      dockerfile: y.string().required().optional(),
      t: y.string().required().optional(),
      extrahosts: y.string().required().optional(),
      remote: y.string().required().optional(),
      q: y.boolean().required().optional(),
      nocache: y.boolean().required().optional(),
      cachefrom: y.string().required().optional(),
      pull: y.string().required().optional(),
      rm: y.boolean().required().optional(),
      forcerm: y.boolean().required().optional(),
      memory: y.number().required().optional(),
      memswap: y.number().required().optional(),
      cpushares: y.number().required().optional(),
      cpusetcpus: y.string().required().optional(),
      cpuperiod: y.number().required().optional(),
      cpuquota: y.number().required().optional(),
      buildargs: y.string().required().optional(),
      shmsize: y.number().required().optional(),
      squash: y.boolean().required().optional(),
      labels: y.string().required().optional(),
      networkmode: y.string().required().optional(),
      platform: y.string().required().optional(),
      target: y.string().required().optional(),
      outputs: y.string().required().optional(),
    }),
    header: y.object({
      "Content-type": y
        .mixed((value): value is "application/x-tar" => value === "application/x-tar")
        .required()
        .optional(),
      "X-Registry-Config": y.string().required().optional(),
    }),
    body: y.string().required(),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/build/prune" => value === "/build/prune").required(),
  parameters: y.object({
    query: y.object({
      "keep-storage": y.number().required().optional(),
      all: y.boolean().required().optional(),
      filters: y.string().required().optional(),
    }),
  }),
  response: y.object({
    CachesDeleted: y.array(y.string().required()).optional(),
    SpaceReclaimed: y.number().required().optional(),
  }),
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/images/create" => value === "/images/create").required(),
  parameters: y.object({
    query: y.object({
      fromImage: y.string().required().optional(),
      fromSrc: y.string().required().optional(),
      repo: y.string().required().optional(),
      tag: y.string().required().optional(),
      message: y.string().required().optional(),
      changes: y.array(y.string().required()).optional(),
      platform: y.string().required().optional(),
    }),
    header: y.object({
      "X-Registry-Auth": y.string().required().optional(),
    }),
    body: y.string().required(),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/images/{name}/json" => value === "/images/{name}/json").required(),
  parameters: y.object({
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: ImageInspect,
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/images/{name}/history" => value === "/images/{name}/history").required(),
  parameters: y.object({
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.array(
    y.object({
      Id: y.string().required(),
      Created: y.number().required(),
      CreatedBy: y.string().required(),
      Tags: y.array(y.string().required()),
      Size: y.number().required(),
      Comment: y.string().required(),
    }),
  ),
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/images/{name}/push" => value === "/images/{name}/push").required(),
  parameters: y.object({
    query: y.object({
      tag: y.string().required().optional(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
    header: y.object({
      "X-Registry-Auth": y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/images/{name}/tag" => value === "/images/{name}/tag").required(),
  parameters: y.object({
    query: y.object({
      repo: y.string().required().optional(),
      tag: y.string().required().optional(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/images/{name}" => value === "/images/{name}").required(),
  parameters: y.object({
    query: y.object({
      force: y.boolean().required().optional(),
      noprune: y.boolean().required().optional(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.array(ImageDeleteResponseItem),
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/images/search" => value === "/images/search").required(),
  parameters: y.object({
    query: y.object({
      term: y.string().required(),
      limit: y.number().required(),
      filters: y.string().required(),
    }),
  }),
  response: y.array(
    y.object({
      description: y.string().required().optional(),
      is_official: y.boolean().required().optional(),
      is_automated: y.boolean().required().optional(),
      name: y.string().required().optional(),
      star_count: y.number().required().optional(),
    }),
  ),
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/images/prune" => value === "/images/prune").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.object({
    ImagesDeleted: y.array(ImageDeleteResponseItem).optional(),
    SpaceReclaimed: y.number().required().optional(),
  }),
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/auth" => value === "/auth").required(),
  parameters: y.object({
    body: AuthConfig,
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/info" => value === "/info").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: SystemInfo,
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/version" => value === "/version").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: SystemVersion,
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/_ping" => value === "/_ping").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: y.mixed((value): value is "HEAD" => value === "HEAD").required(),
  path: y.mixed((value): value is "/_ping" => value === "/_ping").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/commit" => value === "/commit").required(),
  parameters: y.object({
    query: y.object({
      container: y.string().required().optional(),
      repo: y.string().required().optional(),
      tag: y.string().required().optional(),
      comment: y.string().required().optional(),
      author: y.string().required().optional(),
      pause: y.boolean().required().optional(),
      changes: y.string().required().optional(),
    }),
    body: ContainerConfig,
  }),
  response: IdResponse,
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/events" => value === "/events").required(),
  parameters: y.object({
    query: y.object({
      since: y.string().required().optional(),
      until: y.string().required().optional(),
      filters: y.string().required().optional(),
    }),
  }),
  response: EventMessage,
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/system/df" => value === "/system/df").required(),
  parameters: y.object({
    query: y.object({
      type: y
        .array(
          y
            .mixed()
            .oneOf([
              y.mixed((value): value is "container" => value === "container").required(),
              y.mixed((value): value is "image" => value === "image").required(),
              y.mixed((value): value is "volume" => value === "volume").required(),
              y.mixed((value): value is "build-cache" => value === "build-cache").required(),
            ])
            .required(),
        )
        .optional(),
    }),
  }),
  response: y.object({
    LayersSize: y.number().required().optional(),
    Images: y.array(ImageSummary).optional(),
    Containers: y.array(ContainerSummary).optional(),
    Volumes: y.array(Volume).optional(),
    BuildCache: y.array(BuildCache).optional(),
  }),
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/images/{name}/get" => value === "/images/{name}/get").required(),
  parameters: y.object({
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/images/get" => value === "/images/get").required(),
  parameters: y.object({
    query: y.object({
      names: y.array(y.string().required()).optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/images/load" => value === "/images/load").required(),
  parameters: y.object({
    query: y.object({
      quiet: y.boolean().required().optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/containers/{id}/exec" => value === "/containers/{id}/exec").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
    body: y.object({
      AttachStdin: y.boolean().required().optional(),
      AttachStdout: y.boolean().required().optional(),
      AttachStderr: y.boolean().required().optional(),
      ConsoleSize: y
        .mixed()
        .oneOf([
          y.array(y.number().required()),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
      DetachKeys: y.string().required().optional(),
      Tty: y.boolean().required().optional(),
      Env: y.array(y.string().required()).optional(),
      Cmd: y.array(y.string().required()).optional(),
      Privileged: y.boolean().required().optional(),
      User: y.string().required().optional(),
      WorkingDir: y.string().required().optional(),
    }),
  }),
  response: IdResponse,
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/exec/{id}/start" => value === "/exec/{id}/start").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
    body: y.object({
      Detach: y.boolean().required().optional(),
      Tty: y.boolean().required().optional(),
      ConsoleSize: y
        .mixed()
        .oneOf([
          y.array(y.number().required()),
          y.mixed((value): value is any => value === null).required() as y.MixedSchema<null>,
        ])
        .required()
        .optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/exec/{id}/resize" => value === "/exec/{id}/resize").required(),
  parameters: y.object({
    query: y.object({
      h: y.number().required().optional(),
      w: y.number().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/exec/{id}/json" => value === "/exec/{id}/json").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.object({
    CanRemove: y.boolean().required().optional(),
    DetachKeys: y.string().required().optional(),
    ID: y.string().required().optional(),
    Running: y.boolean().required().optional(),
    ExitCode: y.number().required().optional(),
    ProcessConfig: ProcessConfig.optional(),
    OpenStdin: y.boolean().required().optional(),
    OpenStderr: y.boolean().required().optional(),
    OpenStdout: y.boolean().required().optional(),
    ContainerID: y.string().required().optional(),
    Pid: y.number().required().optional(),
  }),
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/volumes" => value === "/volumes").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: VolumeListResponse,
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/volumes/create" => value === "/volumes/create").required(),
  parameters: y.object({
    body: VolumeCreateOptions,
  }),
  response: Volume,
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/volumes/{name}" => value === "/volumes/{name}").required(),
  parameters: y.object({
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: Volume,
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: y.mixed((value): value is "PUT" => value === "PUT").required(),
  path: y.mixed((value): value is "/volumes/{name}" => value === "/volumes/{name}").required(),
  parameters: y.object({
    query: y.object({
      version: y.number().required(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
    body: y.object({
      Spec: ClusterVolumeSpec.optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/volumes/{name}" => value === "/volumes/{name}").required(),
  parameters: y.object({
    query: y.object({
      force: y.boolean().required().optional(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/volumes/prune" => value === "/volumes/prune").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.object({
    VolumesDeleted: y.array(y.string().required()).optional(),
    SpaceReclaimed: y.number().required().optional(),
  }),
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/networks" => value === "/networks").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.array(Network),
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/networks/{id}" => value === "/networks/{id}").required(),
  parameters: y.object({
    query: y.object({
      verbose: y.boolean().required().optional(),
      scope: y.string().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: Network,
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/networks/{id}" => value === "/networks/{id}").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/networks/create" => value === "/networks/create").required(),
  parameters: y.object({
    body: y.object({
      Name: y.string().required(),
      CheckDuplicate: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
      Driver: y
        .mixed()
        .oneOf([
          y.string().required(),
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
      Internal: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
      Attachable: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
      Ingress: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
      IPAM: y
        .mixed()
        .oneOf([IPAM, y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>])
        .required()
        .optional(),
      EnableIPv6: y
        .mixed()
        .oneOf([
          y.boolean().required(),
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
      Options: y
        .mixed()
        .oneOf([
          y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
      Labels: y
        .mixed()
        .oneOf([
          y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
          y.mixed((value): value is any => value === undefined) as y.MixedSchema<undefined>,
        ])
        .required()
        .optional(),
    }),
  }),
  response: y.object({
    Id: y.string().required().optional(),
    Warning: y.string().required().optional(),
  }),
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/networks/{id}/connect" => value === "/networks/{id}/connect").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
    body: y.object({
      Container: y.string().required().optional(),
      EndpointConfig: EndpointSettings.optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/networks/{id}/disconnect" => value === "/networks/{id}/disconnect").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
    body: y.object({
      Container: y.string().required().optional(),
      Force: y.boolean().required().optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/networks/prune" => value === "/networks/prune").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.object({
    NetworksDeleted: y.array(y.string().required()).optional(),
  }),
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/plugins" => value === "/plugins").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.array(Plugin),
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/plugins/privileges" => value === "/plugins/privileges").required(),
  parameters: y.object({
    query: y.object({
      remote: y.string().required(),
    }),
  }),
  response: y.array(PluginPrivilege),
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/plugins/pull" => value === "/plugins/pull").required(),
  parameters: y.object({
    query: y.object({
      remote: y.string().required(),
      name: y.string().required(),
    }),
    header: y.object({
      "X-Registry-Auth": y.string().required().optional(),
    }),
    body: y.array(PluginPrivilege),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/plugins/{name}/json" => value === "/plugins/{name}/json").required(),
  parameters: y.object({
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: Plugin,
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/plugins/{name}" => value === "/plugins/{name}").required(),
  parameters: y.object({
    query: y.object({
      force: y.boolean().required().optional(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: Plugin,
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/plugins/{name}/enable" => value === "/plugins/{name}/enable").required(),
  parameters: y.object({
    query: y.object({
      timeout: y.number().required().optional(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/plugins/{name}/disable" => value === "/plugins/{name}/disable").required(),
  parameters: y.object({
    query: y.object({
      force: y.boolean().required().optional(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/plugins/{name}/upgrade" => value === "/plugins/{name}/upgrade").required(),
  parameters: y.object({
    query: y.object({
      remote: y.string().required(),
    }),
    path: y.object({
      name: y.string().required(),
    }),
    header: y.object({
      "X-Registry-Auth": y.string().required().optional(),
    }),
    body: y.array(PluginPrivilege),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/plugins/create" => value === "/plugins/create").required(),
  parameters: y.object({
    query: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/plugins/{name}/push" => value === "/plugins/{name}/push").required(),
  parameters: y.object({
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/plugins/{name}/set" => value === "/plugins/{name}/set").required(),
  parameters: y.object({
    path: y.object({
      name: y.string().required(),
    }),
    body: y.array(y.string().required()),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/nodes" => value === "/nodes").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.array(Node),
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/nodes/{id}" => value === "/nodes/{id}").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: Node,
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/nodes/{id}" => value === "/nodes/{id}").required(),
  parameters: y.object({
    query: y.object({
      force: y.boolean().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/nodes/{id}/update" => value === "/nodes/{id}/update").required(),
  parameters: y.object({
    query: y.object({
      version: y.number().required(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
    body: NodeSpec,
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/swarm" => value === "/swarm").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: Swarm,
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/swarm/init" => value === "/swarm/init").required(),
  parameters: y.object({
    body: y.object({
      ListenAddr: y.string().required().optional(),
      AdvertiseAddr: y.string().required().optional(),
      DataPathAddr: y.string().required().optional(),
      DataPathPort: y.number().required().optional(),
      DefaultAddrPool: y.array(y.string().required()).optional(),
      ForceNewCluster: y.boolean().required().optional(),
      SubnetSize: y.number().required().optional(),
      Spec: SwarmSpec.optional(),
    }),
  }),
  response: y.string().required(),
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/swarm/join" => value === "/swarm/join").required(),
  parameters: y.object({
    body: y.object({
      ListenAddr: y.string().required().optional(),
      AdvertiseAddr: y.string().required().optional(),
      DataPathAddr: y.string().required().optional(),
      RemoteAddrs: y.array(y.string().required()).optional(),
      JoinToken: y.string().required().optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/swarm/leave" => value === "/swarm/leave").required(),
  parameters: y.object({
    query: y.object({
      force: y.boolean().required().optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/swarm/update" => value === "/swarm/update").required(),
  parameters: y.object({
    query: y.object({
      version: y.number().required(),
      rotateWorkerToken: y.boolean().required(),
      rotateManagerToken: y.boolean().required(),
      rotateManagerUnlockKey: y.boolean().required(),
    }),
    body: SwarmSpec,
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/swarm/unlockkey" => value === "/swarm/unlockkey").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: y.object({
    UnlockKey: y.string().required().optional(),
  }),
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/swarm/unlock" => value === "/swarm/unlock").required(),
  parameters: y.object({
    body: y.object({
      UnlockKey: y.string().required().optional(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/services" => value === "/services").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
      status: y.boolean().required().optional(),
    }),
  }),
  response: y.array(Service),
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/services/create" => value === "/services/create").required(),
  parameters: y.object({
    header: y.object({
      "X-Registry-Auth": y.string().required().optional(),
    }),
    body: y.mixed(/* unsupported */),
  }),
  response: y.object({
    ID: y.string().required().optional(),
    Warning: y.string().required().optional(),
  }),
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/services/{id}" => value === "/services/{id}").required(),
  parameters: y.object({
    query: y.object({
      insertDefaults: y.boolean().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: Service,
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/services/{id}" => value === "/services/{id}").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/services/{id}/update" => value === "/services/{id}/update").required(),
  parameters: y.object({
    query: y.object({
      version: y.number().required(),
      registryAuthFrom: y
        .mixed()
        .oneOf([
          y.mixed((value): value is "spec" => value === "spec").required(),
          y.mixed((value): value is "previous-spec" => value === "previous-spec").required(),
        ])
        .required(),
      rollback: y.string().required(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
    header: y.object({
      "X-Registry-Auth": y.string().required().optional(),
    }),
    body: y.mixed(/* unsupported */),
  }),
  response: ServiceUpdateResponse,
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/services/{id}/logs" => value === "/services/{id}/logs").required(),
  parameters: y.object({
    query: y.object({
      details: y.boolean().required().optional(),
      follow: y.boolean().required().optional(),
      stdout: y.boolean().required().optional(),
      stderr: y.boolean().required().optional(),
      since: y.number().required().optional(),
      timestamps: y.boolean().required().optional(),
      tail: y.string().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/tasks" => value === "/tasks").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.array(Task),
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/tasks/{id}" => value === "/tasks/{id}").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: Task,
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/tasks/{id}/logs" => value === "/tasks/{id}/logs").required(),
  parameters: y.object({
    query: y.object({
      details: y.boolean().required().optional(),
      follow: y.boolean().required().optional(),
      stdout: y.boolean().required().optional(),
      stderr: y.boolean().required().optional(),
      since: y.number().required().optional(),
      timestamps: y.boolean().required().optional(),
      tail: y.string().required().optional(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/secrets" => value === "/secrets").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.array(Secret),
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/secrets/create" => value === "/secrets/create").required(),
  parameters: y.object({
    body: y.mixed(/* unsupported */),
  }),
  response: IdResponse,
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/secrets/{id}" => value === "/secrets/{id}").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: Secret,
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/secrets/{id}" => value === "/secrets/{id}").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/secrets/{id}/update" => value === "/secrets/{id}/update").required(),
  parameters: y.object({
    query: y.object({
      version: y.number().required(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
    body: SecretSpec,
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/configs" => value === "/configs").required(),
  parameters: y.object({
    query: y.object({
      filters: y.string().required().optional(),
    }),
  }),
  response: y.array(Config),
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/configs/create" => value === "/configs/create").required(),
  parameters: y.object({
    body: y.mixed(/* unsupported */),
  }),
  response: IdResponse,
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/configs/{id}" => value === "/configs/{id}").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: Config,
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: y.mixed((value): value is "DELETE" => value === "DELETE").required(),
  path: y.mixed((value): value is "/configs/{id}" => value === "/configs/{id}").required(),
  parameters: y.object({
    path: y.object({
      id: y.string().required(),
    }),
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/configs/{id}/update" => value === "/configs/{id}/update").required(),
  parameters: y.object({
    query: y.object({
      version: y.number().required(),
    }),
    path: y.object({
      id: y.string().required(),
    }),
    body: ConfigSpec,
  }),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: y.mixed((value): value is "GET" => value === "GET").required(),
  path: y.mixed((value): value is "/distribution/{name}/json" => value === "/distribution/{name}/json").required(),
  parameters: y.object({
    path: y.object({
      name: y.string().required(),
    }),
  }),
  response: DistributionInspect,
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: y.mixed((value): value is "POST" => value === "POST").required(),
  path: y.mixed((value): value is "/session" => value === "/session").required(),
  parameters: y.mixed((value): value is never => false).required(),
  response: y.mixed((value): value is any => true).required() as y.MixedSchema<unknown>,
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    "/containers/json": get_ContainerList,
    "/containers/{id}/json": get_ContainerInspect,
    "/containers/{id}/top": get_ContainerTop,
    "/containers/{id}/logs": get_ContainerLogs,
    "/containers/{id}/changes": get_ContainerChanges,
    "/containers/{id}/export": get_ContainerExport,
    "/containers/{id}/stats": get_ContainerStats,
    "/containers/{id}/attach/ws": get_ContainerAttachWebsocket,
    "/containers/{id}/archive": get_ContainerArchive,
    "/images/json": get_ImageList,
    "/images/{name}/json": get_ImageInspect,
    "/images/{name}/history": get_ImageHistory,
    "/images/search": get_ImageSearch,
    "/info": get_SystemInfo,
    "/version": get_SystemVersion,
    "/_ping": get_SystemPing,
    "/events": get_SystemEvents,
    "/system/df": get_SystemDataUsage,
    "/images/{name}/get": get_ImageGet,
    "/images/get": get_ImageGetAll,
    "/exec/{id}/json": get_ExecInspect,
    "/volumes": get_VolumeList,
    "/volumes/{name}": get_VolumeInspect,
    "/networks": get_NetworkList,
    "/networks/{id}": get_NetworkInspect,
    "/plugins": get_PluginList,
    "/plugins/privileges": get_GetPluginPrivileges,
    "/plugins/{name}/json": get_PluginInspect,
    "/nodes": get_NodeList,
    "/nodes/{id}": get_NodeInspect,
    "/swarm": get_SwarmInspect,
    "/swarm/unlockkey": get_SwarmUnlockkey,
    "/services": get_ServiceList,
    "/services/{id}": get_ServiceInspect,
    "/services/{id}/logs": get_ServiceLogs,
    "/tasks": get_TaskList,
    "/tasks/{id}": get_TaskInspect,
    "/tasks/{id}/logs": get_TaskLogs,
    "/secrets": get_SecretList,
    "/secrets/{id}": get_SecretInspect,
    "/configs": get_ConfigList,
    "/configs/{id}": get_ConfigInspect,
    "/distribution/{name}/json": get_DistributionInspect,
  },
  post: {
    "/containers/create": post_ContainerCreate,
    "/containers/{id}/resize": post_ContainerResize,
    "/containers/{id}/start": post_ContainerStart,
    "/containers/{id}/stop": post_ContainerStop,
    "/containers/{id}/restart": post_ContainerRestart,
    "/containers/{id}/kill": post_ContainerKill,
    "/containers/{id}/update": post_ContainerUpdate,
    "/containers/{id}/rename": post_ContainerRename,
    "/containers/{id}/pause": post_ContainerPause,
    "/containers/{id}/unpause": post_ContainerUnpause,
    "/containers/{id}/attach": post_ContainerAttach,
    "/containers/{id}/wait": post_ContainerWait,
    "/containers/prune": post_ContainerPrune,
    "/build": post_ImageBuild,
    "/build/prune": post_BuildPrune,
    "/images/create": post_ImageCreate,
    "/images/{name}/push": post_ImagePush,
    "/images/{name}/tag": post_ImageTag,
    "/images/prune": post_ImagePrune,
    "/auth": post_SystemAuth,
    "/commit": post_ImageCommit,
    "/images/load": post_ImageLoad,
    "/containers/{id}/exec": post_ContainerExec,
    "/exec/{id}/start": post_ExecStart,
    "/exec/{id}/resize": post_ExecResize,
    "/volumes/create": post_VolumeCreate,
    "/volumes/prune": post_VolumePrune,
    "/networks/create": post_NetworkCreate,
    "/networks/{id}/connect": post_NetworkConnect,
    "/networks/{id}/disconnect": post_NetworkDisconnect,
    "/networks/prune": post_NetworkPrune,
    "/plugins/pull": post_PluginPull,
    "/plugins/{name}/enable": post_PluginEnable,
    "/plugins/{name}/disable": post_PluginDisable,
    "/plugins/{name}/upgrade": post_PluginUpgrade,
    "/plugins/create": post_PluginCreate,
    "/plugins/{name}/push": post_PluginPush,
    "/plugins/{name}/set": post_PluginSet,
    "/nodes/{id}/update": post_NodeUpdate,
    "/swarm/init": post_SwarmInit,
    "/swarm/join": post_SwarmJoin,
    "/swarm/leave": post_SwarmLeave,
    "/swarm/update": post_SwarmUpdate,
    "/swarm/unlock": post_SwarmUnlock,
    "/services/create": post_ServiceCreate,
    "/services/{id}/update": post_ServiceUpdate,
    "/secrets/create": post_SecretCreate,
    "/secrets/{id}/update": post_SecretUpdate,
    "/configs/create": post_ConfigCreate,
    "/configs/{id}/update": post_ConfigUpdate,
    "/session": post_Session,
  },
  delete: {
    "/containers/{id}": delete_ContainerDelete,
    "/images/{name}": delete_ImageDelete,
    "/volumes/{name}": delete_VolumeDelete,
    "/networks/{id}": delete_NetworkDelete,
    "/plugins/{name}": delete_PluginDelete,
    "/nodes/{id}": delete_NodeDelete,
    "/services/{id}": delete_ServiceDelete,
    "/secrets/{id}": delete_SecretDelete,
    "/configs/{id}": delete_ConfigDelete,
  },
  put: {
    "/containers/{id}/archive": put_PutContainerArchive,
    "/volumes/{name}": put_VolumeUpdate,
  },
  head: {
    "/containers/{id}/archive": head_ContainerArchiveInfo,
    "/_ping": head_SystemPingHead,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type PostEndpoints = EndpointByMethod["post"];
export type DeleteEndpoints = EndpointByMethod["delete"];
export type PutEndpoints = EndpointByMethod["put"];
export type HeadEndpoints = EndpointByMethod["head"];
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint["response"]>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
    return this.fetcher("get", this.baseUrl + path, params[0]);
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
    return this.fetcher("post", this.baseUrl + path, params[0]);
  }
  // </ApiClient.post>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
    return this.fetcher("delete", this.baseUrl + path, params[0]);
  }
  // </ApiClient.delete>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
    return this.fetcher("put", this.baseUrl + path, params[0]);
  }
  // </ApiClient.put>

  // <ApiClient.head>
  head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<y.InferType<TEndpoint["parameters"]>>
  ): Promise<y.InferType<TEndpoint["response"]>> {
    return this.fetcher("head", this.baseUrl + path, params[0]);
  }
  // </ApiClient.head>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
