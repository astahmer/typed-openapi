import { Schema } from "effect";

// <DefaultSchemas>
const Boolean_default_false_prop = Schema.optionalWith(Schema.Boolean, { default: () => false });
const Int_default_0_prop = Schema.optionalWith(Schema.Int, { default: () => 0 });
const Boolean_default_true_prop = Schema.optionalWith(Schema.Boolean, { default: () => true });
const NullOr_default_false_prop = Schema.optionalWith(Schema.NullOr(Schema.Boolean), { default: () => false });
const Union_default_single_prop = Schema.optionalWith(Schema.Union(Schema.Literal("single"), Schema.Literal("multi")), {
  default: () => "single",
});
const Union_default_none_prop = Schema.optionalWith(
  Schema.Union(Schema.Literal("none"), Schema.Literal("readonly"), Schema.Literal("onewriter"), Schema.Literal("all")),
  { default: () => "none" },
);
const Union_default_active_prop = Schema.optionalWith(
  Schema.Union(Schema.Literal("active"), Schema.Literal("pause"), Schema.Literal("drain")),
  { default: () => "active" },
);
const Int_default_neg_1_prop = Schema.optionalWith(Schema.Int, { default: () => -1 });
const Union_default_local_prop = Schema.optionalWith(Schema.Union(Schema.Literal("local"), Schema.Literal("global")), {
  default: () => "local",
});
const String_default_local_prop = Schema.optionalWith(Schema.String, { default: () => "local" });
const String_default_default_prop = Schema.optionalWith(Schema.String, { default: () => "default" });
const Union_default_ingress_prop = Schema.optionalWith(
  Schema.Union(Schema.Literal("ingress"), Schema.Literal("host")),
  { default: () => "ingress" },
);
const Union_default_vip_prop = Schema.optionalWith(Schema.Union(Schema.Literal("vip"), Schema.Literal("dnsrr")), {
  default: () => "vip",
});
const Int_default_1_prop = Schema.optionalWith(Schema.Int, { default: () => 1 });
const Union_default_value = Schema.transform(
  Schema.UndefinedOr(
    Schema.Union(
      Schema.Literal(""),
      Schema.Literal("inactive"),
      Schema.Literal("pending"),
      Schema.Literal("active"),
      Schema.Literal("error"),
      Schema.Literal("locked"),
    ),
  ),
  Schema.Union(
    Schema.Literal(""),
    Schema.Literal("inactive"),
    Schema.Literal("pending"),
    Schema.Literal("active"),
    Schema.Literal("error"),
    Schema.Literal("locked"),
  ),
  { strict: true, decode: (i) => (i === undefined ? "" : i), encode: (a) => a },
);
const String_default_value_prop = Schema.optionalWith(Schema.String, { default: () => "" });
const Union_default_cgroupfs_prop = Schema.optionalWith(
  Schema.Union(Schema.Literal("cgroupfs"), Schema.Literal("systemd"), Schema.Literal("none")),
  { default: () => "cgroupfs" },
);
const Union_default_1_prop = Schema.optionalWith(Schema.Union(Schema.Literal("1"), Schema.Literal("2")), {
  default: () => "1",
});
const String_default_https_index_docker_io_v1_prop = Schema.optionalWith(Schema.String, {
  default: () => "https://index.docker.io/v1/",
});
const String_default_runc_prop = Schema.optionalWith(Schema.String, { default: () => "runc" });
const Union_default_default_prop = Schema.optionalWith(
  Schema.Union(Schema.Literal("default"), Schema.Literal("hyperv"), Schema.Literal("process")),
  { default: () => "default" },
);
const BooleanFromString_default_false_prop = Schema.optionalWith(Schema.BooleanFromString, { default: () => false });
const String_default_neg_ef_prop = Schema.optionalWith(Schema.String, { default: () => "-ef" });
const Schema_default_0_prop = Schema.optionalWith(Schema.NumberFromString.pipe(Schema.int()), { default: () => 0 });
const String_default_all_prop = Schema.optionalWith(Schema.String, { default: () => "all" });
const BooleanFromString_default_true_prop = Schema.optionalWith(Schema.BooleanFromString, { default: () => true });
const String_default_SIGKILL_prop = Schema.optionalWith(Schema.String, { default: () => "SIGKILL" });
const Union_default_notneg_running_prop = Schema.optionalWith(
  Schema.Union(Schema.Literal("not-running"), Schema.Literal("next-exit"), Schema.Literal("removed")),
  { default: () => "not-running" },
);
const String_default_Dockerfile_prop = Schema.optionalWith(Schema.String, { default: () => "Dockerfile" });
const Union_default_inactive_prop = Schema.optionalWith(
  Schema.Union(
    Schema.Literal("inactive"),
    Schema.Literal("pending"),
    Schema.Literal("error"),
    Schema.Literal("locked"),
    Schema.Literal("active/worker"),
    Schema.Literal("active/manager"),
  ),
  { default: () => "inactive" },
);
const String_default_noneg_cache_noneg_store_mustneg_revalida_prop = Schema.optionalWith(Schema.String, {
  default: () => "no-cache, no-store, must-revalidate",
});
const String_default_noneg_cache_prop = Schema.optionalWith(Schema.String, { default: () => "no-cache" });
const String_default_2_prop = Schema.optionalWith(Schema.String, { default: () => "2" });
const String_default_bridge_prop = Schema.optionalWith(Schema.String, { default: () => "bridge" });
const Union_default_spec_prop = Schema.optionalWith(
  Schema.Union(Schema.Literal("spec"), Schema.Literal("previous-spec")),
  { default: () => "spec" },
);

// </DefaultSchemas>

// <Schemas>
export const Port = Schema.Struct({
  IP: Schema.optional(Schema.String),
  PrivatePort: Schema.Int,
  PublicPort: Schema.optional(Schema.Int),
  Type: Schema.Union(Schema.Literal("tcp"), Schema.Literal("udp"), Schema.Literal("sctp")),
});
export type Port = typeof Port.Type;

export const MountPoint = Schema.partial(
  Schema.Struct({
    Type: Schema.Union(
      Schema.Literal("bind"),
      Schema.Literal("volume"),
      Schema.Literal("tmpfs"),
      Schema.Literal("npipe"),
      Schema.Literal("cluster"),
    ),
    Name: Schema.String,
    Source: Schema.String,
    Destination: Schema.String,
    Driver: Schema.String,
    Mode: Schema.String,
    RW: Schema.Boolean,
    Propagation: Schema.String,
  }),
);
export type MountPoint = typeof MountPoint.Type;

export const DeviceMapping = Schema.partial(
  Schema.Struct({ PathOnHost: Schema.String, PathInContainer: Schema.String, CgroupPermissions: Schema.String }),
);
export type DeviceMapping = typeof DeviceMapping.Type;

export const DeviceRequest = Schema.partial(
  Schema.Struct({
    Driver: Schema.String,
    Count: Schema.Int,
    DeviceIDs: Schema.Array(Schema.String),
    Capabilities: Schema.Array(Schema.Array(Schema.String)),
    Options: Schema.Record({ key: Schema.String, value: Schema.String }),
  }),
);
export type DeviceRequest = typeof DeviceRequest.Type;

export const ThrottleDevice = Schema.partial(
  Schema.Struct({ Path: Schema.String, Rate: Schema.Int.pipe(Schema.greaterThanOrEqualTo(0)) }),
);
export type ThrottleDevice = typeof ThrottleDevice.Type;

export const Mount = Schema.partial(
  Schema.Struct({
    Target: Schema.String,
    Source: Schema.String,
    Type: Schema.Union(
      Schema.Literal("bind"),
      Schema.Literal("volume"),
      Schema.Literal("tmpfs"),
      Schema.Literal("npipe"),
      Schema.Literal("cluster"),
    ),
    ReadOnly: Schema.Boolean,
    Consistency: Schema.String,
    BindOptions: Schema.partial(
      Schema.Struct({
        Propagation: Schema.Union(
          Schema.Literal("private"),
          Schema.Literal("rprivate"),
          Schema.Literal("shared"),
          Schema.Literal("rshared"),
          Schema.Literal("slave"),
          Schema.Literal("rslave"),
        ),
        NonRecursive: Boolean_default_false_prop,
        CreateMountpoint: Boolean_default_false_prop,
      }),
    ),
    VolumeOptions: Schema.partial(
      Schema.Struct({
        NoCopy: Boolean_default_false_prop,
        Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        DriverConfig: Schema.partial(
          Schema.Struct({ Name: Schema.String, Options: Schema.Record({ key: Schema.String, value: Schema.String }) }),
        ),
      }),
    ),
    TmpfsOptions: Schema.partial(Schema.Struct({ SizeBytes: Schema.Int, Mode: Schema.Int })),
  }),
);
export type Mount = typeof Mount.Type;

export const RestartPolicy = Schema.partial(
  Schema.Struct({
    Name: Schema.Union(
      Schema.Literal(""),
      Schema.Literal("no"),
      Schema.Literal("always"),
      Schema.Literal("unless-stopped"),
      Schema.Literal("on-failure"),
    ),
    MaximumRetryCount: Schema.Int,
  }),
);
export type RestartPolicy = typeof RestartPolicy.Type;

export const Resources = Schema.partial(
  Schema.Struct({
    CpuShares: Schema.Int,
    Memory: Int_default_0_prop,
    CgroupParent: Schema.String,
    BlkioWeight: Schema.Int.pipe(Schema.greaterThanOrEqualTo(0), Schema.lessThanOrEqualTo(1000)),
    BlkioWeightDevice: Schema.Array(
      Schema.partial(Schema.Struct({ Path: Schema.String, Weight: Schema.Int.pipe(Schema.greaterThanOrEqualTo(0)) })),
    ),
    BlkioDeviceReadBps: Schema.Array(ThrottleDevice),
    BlkioDeviceWriteBps: Schema.Array(ThrottleDevice),
    BlkioDeviceReadIOps: Schema.Array(ThrottleDevice),
    BlkioDeviceWriteIOps: Schema.Array(ThrottleDevice),
    CpuPeriod: Schema.Int,
    CpuQuota: Schema.Int,
    CpuRealtimePeriod: Schema.Int,
    CpuRealtimeRuntime: Schema.Int,
    CpusetCpus: Schema.String,
    CpusetMems: Schema.String,
    Devices: Schema.Array(DeviceMapping),
    DeviceCgroupRules: Schema.Array(Schema.String),
    DeviceRequests: Schema.Array(DeviceRequest),
    KernelMemoryTCP: Schema.Int,
    MemoryReservation: Schema.Int,
    MemorySwap: Schema.Int,
    MemorySwappiness: Schema.Int.pipe(Schema.greaterThanOrEqualTo(0), Schema.lessThanOrEqualTo(100)),
    NanoCpus: Schema.Int,
    OomKillDisable: Schema.Boolean,
    Init: Schema.NullOr(Schema.Boolean),
    PidsLimit: Schema.NullOr(Schema.Int),
    Ulimits: Schema.Array(Schema.partial(Schema.Struct({ Name: Schema.String, Soft: Schema.Int, Hard: Schema.Int }))),
    CpuCount: Schema.Int,
    CpuPercent: Schema.Int,
    IOMaximumIOps: Schema.Int,
    IOMaximumBandwidth: Schema.Int,
  }),
);
export type Resources = typeof Resources.Type;

export const Limit = Schema.partial(
  Schema.Struct({ NanoCPUs: Schema.Int, MemoryBytes: Schema.Int, Pids: Int_default_0_prop }),
);
export type Limit = typeof Limit.Type;

export const GenericResources = Schema.Array(
  Schema.partial(
    Schema.Struct({
      NamedResourceSpec: Schema.partial(Schema.Struct({ Kind: Schema.String, Value: Schema.String })),
      DiscreteResourceSpec: Schema.partial(Schema.Struct({ Kind: Schema.String, Value: Schema.Int })),
    }),
  ),
);
export type GenericResources = typeof GenericResources.Type;

export const ResourceObject = Schema.partial(
  Schema.Struct({ NanoCPUs: Schema.Int, MemoryBytes: Schema.Int, GenericResources: GenericResources }),
);
export type ResourceObject = typeof ResourceObject.Type;

export const HealthConfig = Schema.partial(
  Schema.Struct({
    Test: Schema.Array(Schema.String),
    Interval: Schema.Int,
    Timeout: Schema.Int,
    Retries: Schema.Int,
    StartPeriod: Schema.Int,
  }),
);
export type HealthConfig = typeof HealthConfig.Type;

export const HealthcheckResult = Schema.NullOr(
  Schema.partial(
    Schema.Struct({ Start: Schema.String, End: Schema.String, ExitCode: Schema.Int, Output: Schema.String }),
  ),
);
export type HealthcheckResult = typeof HealthcheckResult.Type;

export const Health = Schema.NullOr(
  Schema.partial(
    Schema.Struct({
      Status: Schema.Union(
        Schema.Literal("none"),
        Schema.Literal("starting"),
        Schema.Literal("healthy"),
        Schema.Literal("unhealthy"),
      ),
      FailingStreak: Schema.Int,
      Log: Schema.Array(HealthcheckResult),
    }),
  ),
);
export type Health = typeof Health.Type;

export const PortBinding = Schema.partial(Schema.Struct({ HostIp: Schema.String, HostPort: Schema.String }));
export type PortBinding = typeof PortBinding.Type;

export const PortMap = Schema.Record({ key: Schema.String, value: Schema.NullOr(Schema.Array(PortBinding)) });
export type PortMap = typeof PortMap.Type;

export const HostConfig = Schema.extend(
  Resources,
  Schema.partial(
    Schema.Struct({
      Binds: Schema.Array(Schema.String),
      ContainerIDFile: Schema.String,
      LogConfig: Schema.partial(
        Schema.Struct({
          Type: Schema.Union(
            Schema.Literal("json-file"),
            Schema.Literal("syslog"),
            Schema.Literal("journald"),
            Schema.Literal("gelf"),
            Schema.Literal("fluentd"),
            Schema.Literal("awslogs"),
            Schema.Literal("splunk"),
            Schema.Literal("etwlogs"),
            Schema.Literal("none"),
          ),
          Config: Schema.Record({ key: Schema.String, value: Schema.String }),
        }),
      ),
      NetworkMode: Schema.String,
      PortBindings: PortMap,
      RestartPolicy: RestartPolicy,
      AutoRemove: Schema.Boolean,
      VolumeDriver: Schema.String,
      VolumesFrom: Schema.Array(Schema.String),
      Mounts: Schema.Array(Mount),
      ConsoleSize: Schema.NullOr(
        Schema.Array(Schema.Int.pipe(Schema.greaterThanOrEqualTo(0))).pipe(Schema.minItems(2), Schema.maxItems(2)),
      ),
      Annotations: Schema.Record({ key: Schema.String, value: Schema.String }),
      CapAdd: Schema.Array(Schema.String),
      CapDrop: Schema.Array(Schema.String),
      CgroupnsMode: Schema.Union(Schema.Literal("private"), Schema.Literal("host")),
      Dns: Schema.Array(Schema.String),
      DnsOptions: Schema.Array(Schema.String),
      DnsSearch: Schema.Array(Schema.String),
      ExtraHosts: Schema.Array(Schema.String),
      GroupAdd: Schema.Array(Schema.String),
      IpcMode: Schema.String,
      Cgroup: Schema.String,
      Links: Schema.Array(Schema.String),
      OomScoreAdj: Schema.Int,
      PidMode: Schema.String,
      Privileged: Schema.Boolean,
      PublishAllPorts: Schema.Boolean,
      ReadonlyRootfs: Schema.Boolean,
      SecurityOpt: Schema.Array(Schema.String),
      StorageOpt: Schema.Record({ key: Schema.String, value: Schema.String }),
      Tmpfs: Schema.Record({ key: Schema.String, value: Schema.String }),
      UTSMode: Schema.String,
      UsernsMode: Schema.String,
      ShmSize: Schema.Int.pipe(Schema.greaterThanOrEqualTo(0)),
      Sysctls: Schema.Record({ key: Schema.String, value: Schema.String }),
      Runtime: Schema.String,
      Isolation: Schema.Union(Schema.Literal("default"), Schema.Literal("process"), Schema.Literal("hyperv")),
      MaskedPaths: Schema.Array(Schema.String),
      ReadonlyPaths: Schema.Array(Schema.String),
    }),
  ),
);
export type HostConfig = typeof HostConfig.Type;

export const ContainerConfig = Schema.partial(
  Schema.Struct({
    Hostname: Schema.String,
    Domainname: Schema.String,
    User: Schema.String,
    AttachStdin: Boolean_default_false_prop,
    AttachStdout: Boolean_default_true_prop,
    AttachStderr: Boolean_default_true_prop,
    ExposedPorts: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.partial(Schema.Struct({})) })),
    Tty: Boolean_default_false_prop,
    OpenStdin: Boolean_default_false_prop,
    StdinOnce: Boolean_default_false_prop,
    Env: Schema.Array(Schema.String),
    Cmd: Schema.Array(Schema.String),
    Healthcheck: HealthConfig,
    ArgsEscaped: NullOr_default_false_prop,
    Image: Schema.String,
    Volumes: Schema.Record({ key: Schema.String, value: Schema.partial(Schema.Struct({})) }),
    WorkingDir: Schema.String,
    Entrypoint: Schema.Array(Schema.String),
    NetworkDisabled: Schema.NullOr(Schema.Boolean),
    MacAddress: Schema.NullOr(Schema.String),
    OnBuild: Schema.NullOr(Schema.Array(Schema.String)),
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    StopSignal: Schema.NullOr(Schema.String),
    StopTimeout: Schema.NullOr(Schema.Int),
    Shell: Schema.NullOr(Schema.Array(Schema.String)),
  }),
);
export type ContainerConfig = typeof ContainerConfig.Type;

export const EndpointIPAMConfig = Schema.NullOr(
  Schema.partial(
    Schema.Struct({
      IPv4Address: Schema.String,
      IPv6Address: Schema.String,
      LinkLocalIPs: Schema.Array(Schema.String),
    }),
  ),
);
export type EndpointIPAMConfig = typeof EndpointIPAMConfig.Type;

export const EndpointSettings = Schema.partial(
  Schema.Struct({
    IPAMConfig: EndpointIPAMConfig,
    Links: Schema.Array(Schema.String),
    Aliases: Schema.Array(Schema.String),
    NetworkID: Schema.String,
    EndpointID: Schema.String,
    Gateway: Schema.String,
    IPAddress: Schema.String,
    IPPrefixLen: Schema.Int,
    IPv6Gateway: Schema.String,
    GlobalIPv6Address: Schema.String,
    GlobalIPv6PrefixLen: Schema.Int,
    MacAddress: Schema.String,
    DriverOpts: Schema.NullOr(Schema.Record({ key: Schema.String, value: Schema.String })),
  }),
);
export type EndpointSettings = typeof EndpointSettings.Type;

export const NetworkingConfig = Schema.partial(
  Schema.Struct({ EndpointsConfig: Schema.Record({ key: Schema.String, value: EndpointSettings }) }),
);
export type NetworkingConfig = typeof NetworkingConfig.Type;

export const Address = Schema.partial(Schema.Struct({ Addr: Schema.String, PrefixLen: Schema.Int }));
export type Address = typeof Address.Type;

export const NetworkSettings = Schema.partial(
  Schema.Struct({
    Bridge: Schema.String,
    SandboxID: Schema.String,
    HairpinMode: Schema.Boolean,
    LinkLocalIPv6Address: Schema.String,
    LinkLocalIPv6PrefixLen: Schema.Int,
    Ports: PortMap,
    SandboxKey: Schema.String,
    SecondaryIPAddresses: Schema.NullOr(Schema.Array(Address)),
    SecondaryIPv6Addresses: Schema.NullOr(Schema.Array(Address)),
    EndpointID: Schema.String,
    Gateway: Schema.String,
    GlobalIPv6Address: Schema.String,
    GlobalIPv6PrefixLen: Schema.Int,
    IPAddress: Schema.String,
    IPPrefixLen: Schema.Int,
    IPv6Gateway: Schema.String,
    MacAddress: Schema.String,
    Networks: Schema.Record({ key: Schema.String, value: EndpointSettings }),
  }),
);
export type NetworkSettings = typeof NetworkSettings.Type;

export const GraphDriverData = Schema.Struct({
  Name: Schema.String,
  Data: Schema.Record({ key: Schema.String, value: Schema.String }),
});
export type GraphDriverData = typeof GraphDriverData.Type;

export const ChangeType = Schema.Union(Schema.Literal(0), Schema.Literal(1), Schema.Literal(2));
export type ChangeType = typeof ChangeType.Type;

export const FilesystemChange = Schema.Struct({ Path: Schema.String, Kind: ChangeType });
export type FilesystemChange = typeof FilesystemChange.Type;

export const ImageInspect = Schema.partial(
  Schema.Struct({
    Id: Schema.String,
    RepoTags: Schema.Array(Schema.String),
    RepoDigests: Schema.Array(Schema.String),
    Parent: Schema.String,
    Comment: Schema.String,
    Created: Schema.String,
    Container: Schema.String,
    ContainerConfig: ContainerConfig,
    DockerVersion: Schema.String,
    Author: Schema.String,
    Config: ContainerConfig,
    Architecture: Schema.String,
    Variant: Schema.NullOr(Schema.String),
    Os: Schema.String,
    OsVersion: Schema.NullOr(Schema.String),
    Size: Schema.Int,
    VirtualSize: Schema.Int,
    GraphDriver: GraphDriverData,
    RootFS: Schema.Struct({ Type: Schema.String, Layers: Schema.optional(Schema.Array(Schema.String)) }),
    Metadata: Schema.partial(Schema.Struct({ LastTagTime: Schema.NullOr(Schema.String) })),
  }),
);
export type ImageInspect = typeof ImageInspect.Type;

export const ImageSummary = Schema.Struct({
  Id: Schema.String,
  ParentId: Schema.String,
  RepoTags: Schema.Array(Schema.String),
  RepoDigests: Schema.Array(Schema.String),
  Created: Schema.Int,
  Size: Schema.Int,
  SharedSize: Schema.Int,
  VirtualSize: Schema.optional(Schema.Int),
  Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
  Containers: Schema.Int,
});
export type ImageSummary = typeof ImageSummary.Type;

export const AuthConfig = Schema.partial(
  Schema.Struct({
    username: Schema.String,
    password: Schema.String,
    email: Schema.String,
    serveraddress: Schema.String,
  }),
);
export type AuthConfig = typeof AuthConfig.Type;

export const ProcessConfig = Schema.partial(
  Schema.Struct({
    privileged: Schema.Boolean,
    user: Schema.String,
    tty: Schema.Boolean,
    entrypoint: Schema.String,
    arguments: Schema.Array(Schema.String),
  }),
);
export type ProcessConfig = typeof ProcessConfig.Type;

export const ObjectVersion = Schema.partial(Schema.Struct({ Index: Schema.Int }));
export type ObjectVersion = typeof ObjectVersion.Type;

export const Topology = Schema.Record({ key: Schema.String, value: Schema.String });
export type Topology = typeof Topology.Type;

export const ClusterVolumeSpec = Schema.partial(
  Schema.Struct({
    Group: Schema.String,
    AccessMode: Schema.partial(
      Schema.Struct({
        Scope: Union_default_single_prop,
        Sharing: Union_default_none_prop,
        MountVolume: Schema.partial(Schema.Struct({})),
        Secrets: Schema.Array(Schema.partial(Schema.Struct({ Key: Schema.String, Secret: Schema.String }))),
        AccessibilityRequirements: Schema.partial(
          Schema.Struct({ Requisite: Schema.Array(Topology), Preferred: Schema.Array(Topology) }),
        ),
        CapacityRange: Schema.partial(Schema.Struct({ RequiredBytes: Schema.Int, LimitBytes: Schema.Int })),
        Availability: Union_default_active_prop,
      }),
    ),
  }),
);
export type ClusterVolumeSpec = typeof ClusterVolumeSpec.Type;

export const ClusterVolume = Schema.partial(
  Schema.Struct({
    ID: Schema.String,
    Version: ObjectVersion,
    CreatedAt: Schema.String,
    UpdatedAt: Schema.String,
    Spec: ClusterVolumeSpec,
    Info: Schema.partial(
      Schema.Struct({
        CapacityBytes: Schema.Int,
        VolumeContext: Schema.Record({ key: Schema.String, value: Schema.String }),
        VolumeID: Schema.String,
        AccessibleTopology: Schema.Array(Topology),
      }),
    ),
    PublishStatus: Schema.Array(
      Schema.partial(
        Schema.Struct({
          NodeID: Schema.String,
          State: Schema.Union(
            Schema.Literal("pending-publish"),
            Schema.Literal("published"),
            Schema.Literal("pending-node-unpublish"),
            Schema.Literal("pending-controller-unpublish"),
          ),
          PublishContext: Schema.Record({ key: Schema.String, value: Schema.String }),
        }),
      ),
    ),
  }),
);
export type ClusterVolume = typeof ClusterVolume.Type;

export const Volume = Schema.Struct({
  Name: Schema.String,
  Driver: Schema.String,
  Mountpoint: Schema.String,
  CreatedAt: Schema.optional(Schema.String),
  Status: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.partial(Schema.Struct({})) })),
  Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
  Scope: Union_default_local_prop,
  ClusterVolume: Schema.optional(ClusterVolume),
  Options: Schema.Record({ key: Schema.String, value: Schema.String }),
  UsageData: Schema.optional(
    Schema.NullOr(Schema.Struct({ Size: Int_default_neg_1_prop, RefCount: Int_default_neg_1_prop })),
  ),
});
export type Volume = typeof Volume.Type;

export const VolumeCreateOptions = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    Driver: String_default_local_prop,
    DriverOpts: Schema.Record({ key: Schema.String, value: Schema.String }),
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    ClusterVolumeSpec: ClusterVolumeSpec,
  }),
);
export type VolumeCreateOptions = typeof VolumeCreateOptions.Type;

export const VolumeListResponse = Schema.partial(
  Schema.Struct({ Volumes: Schema.Array(Volume), Warnings: Schema.Array(Schema.String) }),
);
export type VolumeListResponse = typeof VolumeListResponse.Type;

export const IPAMConfig = Schema.partial(
  Schema.Struct({
    Subnet: Schema.String,
    IPRange: Schema.String,
    Gateway: Schema.String,
    AuxiliaryAddresses: Schema.Record({ key: Schema.String, value: Schema.String }),
  }),
);
export type IPAMConfig = typeof IPAMConfig.Type;

export const IPAM = Schema.partial(
  Schema.Struct({
    Driver: String_default_default_prop,
    Config: Schema.Array(IPAMConfig),
    Options: Schema.Record({ key: Schema.String, value: Schema.String }),
  }),
);
export type IPAM = typeof IPAM.Type;

export const NetworkContainer = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    EndpointID: Schema.String,
    MacAddress: Schema.String,
    IPv4Address: Schema.String,
    IPv6Address: Schema.String,
  }),
);
export type NetworkContainer = typeof NetworkContainer.Type;

export const Network = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    Id: Schema.String,
    Created: Schema.String,
    Scope: Schema.String,
    Driver: Schema.String,
    EnableIPv6: Schema.Boolean,
    IPAM: IPAM,
    Internal: Schema.Boolean,
    Attachable: Schema.Boolean,
    Ingress: Schema.Boolean,
    Containers: Schema.Record({ key: Schema.String, value: NetworkContainer }),
    Options: Schema.Record({ key: Schema.String, value: Schema.String }),
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
  }),
);
export type Network = typeof Network.Type;

export const ErrorDetail = Schema.partial(Schema.Struct({ code: Schema.Int, message: Schema.String }));
export type ErrorDetail = typeof ErrorDetail.Type;

export const ProgressDetail = Schema.partial(Schema.Struct({ current: Schema.Int, total: Schema.Int }));
export type ProgressDetail = typeof ProgressDetail.Type;

export const ImageID = Schema.partial(Schema.Struct({ ID: Schema.String }));
export type ImageID = typeof ImageID.Type;

export const BuildInfo = Schema.partial(
  Schema.Struct({
    id: Schema.String,
    stream: Schema.String,
    error: Schema.String,
    errorDetail: ErrorDetail,
    status: Schema.String,
    progress: Schema.String,
    progressDetail: ProgressDetail,
    aux: ImageID,
  }),
);
export type BuildInfo = typeof BuildInfo.Type;

export const BuildCache = Schema.partial(
  Schema.Struct({
    ID: Schema.String,
    Parent: Schema.NullOr(Schema.String),
    Parents: Schema.NullOr(Schema.Array(Schema.String)),
    Type: Schema.Union(
      Schema.Literal("internal"),
      Schema.Literal("frontend"),
      Schema.Literal("source.local"),
      Schema.Literal("source.git.checkout"),
      Schema.Literal("exec.cachemount"),
      Schema.Literal("regular"),
    ),
    Description: Schema.String,
    InUse: Schema.Boolean,
    Shared: Schema.Boolean,
    Size: Schema.Int,
    CreatedAt: Schema.String,
    LastUsedAt: Schema.NullOr(Schema.String),
    UsageCount: Schema.Int,
  }),
);
export type BuildCache = typeof BuildCache.Type;

export const CreateImageInfo = Schema.partial(
  Schema.Struct({
    id: Schema.String,
    error: Schema.String,
    errorDetail: ErrorDetail,
    status: Schema.String,
    progress: Schema.String,
    progressDetail: ProgressDetail,
  }),
);
export type CreateImageInfo = typeof CreateImageInfo.Type;

export const PushImageInfo = Schema.partial(
  Schema.Struct({
    error: Schema.String,
    status: Schema.String,
    progress: Schema.String,
    progressDetail: ProgressDetail,
  }),
);
export type PushImageInfo = typeof PushImageInfo.Type;

export const ErrorResponse = Schema.Struct({ message: Schema.String });
export type ErrorResponse = typeof ErrorResponse.Type;

export const IdResponse = Schema.Struct({ Id: Schema.String });
export type IdResponse = typeof IdResponse.Type;

export const PluginMount = Schema.Struct({
  Name: Schema.String,
  Description: Schema.String,
  Settable: Schema.Array(Schema.String),
  Source: Schema.String,
  Destination: Schema.String,
  Type: Schema.String,
  Options: Schema.Array(Schema.String),
});
export type PluginMount = typeof PluginMount.Type;

export const PluginDevice = Schema.Struct({
  Name: Schema.String,
  Description: Schema.String,
  Settable: Schema.Array(Schema.String),
  Path: Schema.String,
});
export type PluginDevice = typeof PluginDevice.Type;

export const PluginEnv = Schema.Struct({
  Name: Schema.String,
  Description: Schema.String,
  Settable: Schema.Array(Schema.String),
  Value: Schema.String,
});
export type PluginEnv = typeof PluginEnv.Type;

export const PluginInterfaceType = Schema.Struct({
  Prefix: Schema.String,
  Capability: Schema.String,
  Version: Schema.String,
});
export type PluginInterfaceType = typeof PluginInterfaceType.Type;

export const PluginPrivilege = Schema.partial(
  Schema.Struct({ Name: Schema.String, Description: Schema.String, Value: Schema.Array(Schema.String) }),
);
export type PluginPrivilege = typeof PluginPrivilege.Type;

export const Plugin = Schema.Struct({
  Id: Schema.optional(Schema.String),
  Name: Schema.String,
  Enabled: Schema.Boolean,
  Settings: Schema.Struct({
    Mounts: Schema.Array(PluginMount),
    Env: Schema.Array(Schema.String),
    Args: Schema.Array(Schema.String),
    Devices: Schema.Array(PluginDevice),
  }),
  PluginReference: Schema.optional(Schema.String),
  Config: Schema.Struct({
    DockerVersion: Schema.optional(Schema.String),
    Description: Schema.String,
    Documentation: Schema.String,
    Interface: Schema.Struct({
      Types: Schema.Array(PluginInterfaceType),
      Socket: Schema.String,
      ProtocolScheme: Schema.optional(Schema.Union(Schema.Literal(""), Schema.Literal("moby.plugins.http/v1"))),
    }),
    Entrypoint: Schema.Array(Schema.String),
    WorkDir: Schema.String,
    User: Schema.optional(Schema.partial(Schema.Struct({ UID: Schema.Int, GID: Schema.Int }))),
    Network: Schema.Struct({ Type: Schema.String }),
    Linux: Schema.Struct({
      Capabilities: Schema.Array(Schema.String),
      AllowAllDevices: Schema.Boolean,
      Devices: Schema.Array(PluginDevice),
    }),
    PropagatedMount: Schema.String,
    IpcHost: Schema.Boolean,
    PidHost: Schema.Boolean,
    Mounts: Schema.Array(PluginMount),
    Env: Schema.Array(PluginEnv),
    Args: Schema.Struct({
      Name: Schema.String,
      Description: Schema.String,
      Settable: Schema.Array(Schema.String),
      Value: Schema.Array(Schema.String),
    }),
    rootfs: Schema.optional(
      Schema.partial(Schema.Struct({ type: Schema.String, diff_ids: Schema.Array(Schema.String) })),
    ),
  }),
});
export type Plugin = typeof Plugin.Type;

export const NodeSpec = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    Role: Schema.Union(Schema.Literal("worker"), Schema.Literal("manager")),
    Availability: Schema.Union(Schema.Literal("active"), Schema.Literal("pause"), Schema.Literal("drain")),
  }),
);
export type NodeSpec = typeof NodeSpec.Type;

export const Platform = Schema.partial(Schema.Struct({ Architecture: Schema.String, OS: Schema.String }));
export type Platform = typeof Platform.Type;

export const EngineDescription = Schema.partial(
  Schema.Struct({
    EngineVersion: Schema.String,
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    Plugins: Schema.Array(Schema.partial(Schema.Struct({ Type: Schema.String, Name: Schema.String }))),
  }),
);
export type EngineDescription = typeof EngineDescription.Type;

export const TLSInfo = Schema.partial(
  Schema.Struct({ TrustRoot: Schema.String, CertIssuerSubject: Schema.String, CertIssuerPublicKey: Schema.String }),
);
export type TLSInfo = typeof TLSInfo.Type;

export const NodeDescription = Schema.partial(
  Schema.Struct({
    Hostname: Schema.String,
    Platform: Platform,
    Resources: ResourceObject,
    Engine: EngineDescription,
    TLSInfo: TLSInfo,
  }),
);
export type NodeDescription = typeof NodeDescription.Type;

export const NodeState = Schema.Union(
  Schema.Literal("unknown"),
  Schema.Literal("down"),
  Schema.Literal("ready"),
  Schema.Literal("disconnected"),
);
export type NodeState = typeof NodeState.Type;

export const NodeStatus = Schema.partial(
  Schema.Struct({ State: NodeState, Message: Schema.String, Addr: Schema.String }),
);
export type NodeStatus = typeof NodeStatus.Type;

export const Reachability = Schema.Union(
  Schema.Literal("unknown"),
  Schema.Literal("unreachable"),
  Schema.Literal("reachable"),
);
export type Reachability = typeof Reachability.Type;

export const ManagerStatus = Schema.NullOr(
  Schema.partial(
    Schema.Struct({ Leader: Boolean_default_false_prop, Reachability: Reachability, Addr: Schema.String }),
  ),
);
export type ManagerStatus = typeof ManagerStatus.Type;

export const Node = Schema.partial(
  Schema.Struct({
    ID: Schema.String,
    Version: ObjectVersion,
    CreatedAt: Schema.String,
    UpdatedAt: Schema.String,
    Spec: NodeSpec,
    Description: NodeDescription,
    Status: NodeStatus,
    ManagerStatus: ManagerStatus,
  }),
);
export type Node = typeof Node.Type;

export const SwarmSpec = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    Orchestration: Schema.NullOr(Schema.partial(Schema.Struct({ TaskHistoryRetentionLimit: Schema.Int }))),
    Raft: Schema.partial(
      Schema.Struct({
        SnapshotInterval: Schema.Int,
        KeepOldSnapshots: Schema.Int,
        LogEntriesForSlowFollowers: Schema.Int,
        ElectionTick: Schema.Int,
        HeartbeatTick: Schema.Int,
      }),
    ),
    Dispatcher: Schema.NullOr(Schema.partial(Schema.Struct({ HeartbeatPeriod: Schema.Int }))),
    CAConfig: Schema.NullOr(
      Schema.partial(
        Schema.Struct({
          NodeCertExpiry: Schema.Int,
          ExternalCAs: Schema.Array(
            Schema.partial(
              Schema.Struct({
                Protocol: Schema.Literal("cfssl"),
                URL: Schema.String,
                Options: Schema.Record({ key: Schema.String, value: Schema.String }),
                CACert: Schema.String,
              }),
            ),
          ),
          SigningCACert: Schema.String,
          SigningCAKey: Schema.String,
          ForceRotate: Schema.Int,
        }),
      ),
    ),
    EncryptionConfig: Schema.partial(Schema.Struct({ AutoLockManagers: Schema.Boolean })),
    TaskDefaults: Schema.partial(
      Schema.Struct({
        LogDriver: Schema.partial(
          Schema.Struct({ Name: Schema.String, Options: Schema.Record({ key: Schema.String, value: Schema.String }) }),
        ),
      }),
    ),
  }),
);
export type SwarmSpec = typeof SwarmSpec.Type;

export const ClusterInfo = Schema.NullOr(
  Schema.partial(
    Schema.Struct({
      ID: Schema.String,
      Version: ObjectVersion,
      CreatedAt: Schema.String,
      UpdatedAt: Schema.String,
      Spec: SwarmSpec,
      TLSInfo: TLSInfo,
      RootRotationInProgress: Schema.Boolean,
      DataPathPort: Schema.Int,
      DefaultAddrPool: Schema.Array(Schema.String),
      SubnetSize: Schema.Int.pipe(Schema.lessThanOrEqualTo(29)),
    }),
  ),
);
export type ClusterInfo = typeof ClusterInfo.Type;

export const JoinTokens = Schema.partial(Schema.Struct({ Worker: Schema.String, Manager: Schema.String }));
export type JoinTokens = typeof JoinTokens.Type;

export const Swarm = Schema.extend(ClusterInfo, Schema.partial(Schema.Struct({ JoinTokens: JoinTokens })));
export type Swarm = typeof Swarm.Type;

export const NetworkAttachmentConfig = Schema.partial(
  Schema.Struct({
    Target: Schema.String,
    Aliases: Schema.Array(Schema.String),
    DriverOpts: Schema.Record({ key: Schema.String, value: Schema.String }),
  }),
);
export type NetworkAttachmentConfig = typeof NetworkAttachmentConfig.Type;

export const TaskSpec = Schema.partial(
  Schema.Struct({
    PluginSpec: Schema.partial(
      Schema.Struct({
        Name: Schema.String,
        Remote: Schema.String,
        Disabled: Schema.Boolean,
        PluginPrivilege: Schema.Array(PluginPrivilege),
      }),
    ),
    ContainerSpec: Schema.partial(
      Schema.Struct({
        Image: Schema.String,
        Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        Command: Schema.Array(Schema.String),
        Args: Schema.Array(Schema.String),
        Hostname: Schema.String,
        Env: Schema.Array(Schema.String),
        Dir: Schema.String,
        User: Schema.String,
        Groups: Schema.Array(Schema.String),
        Privileges: Schema.partial(
          Schema.Struct({
            CredentialSpec: Schema.partial(
              Schema.Struct({ Config: Schema.String, File: Schema.String, Registry: Schema.String }),
            ),
            SELinuxContext: Schema.partial(
              Schema.Struct({
                Disable: Schema.Boolean,
                User: Schema.String,
                Role: Schema.String,
                Type: Schema.String,
                Level: Schema.String,
              }),
            ),
          }),
        ),
        TTY: Schema.Boolean,
        OpenStdin: Schema.Boolean,
        ReadOnly: Schema.Boolean,
        Mounts: Schema.Array(Mount),
        StopSignal: Schema.String,
        StopGracePeriod: Schema.Int,
        HealthCheck: HealthConfig,
        Hosts: Schema.Array(Schema.String),
        DNSConfig: Schema.partial(
          Schema.Struct({
            Nameservers: Schema.Array(Schema.String),
            Search: Schema.Array(Schema.String),
            Options: Schema.Array(Schema.String),
          }),
        ),
        Secrets: Schema.Array(
          Schema.partial(
            Schema.Struct({
              File: Schema.partial(
                Schema.Struct({ Name: Schema.String, UID: Schema.String, GID: Schema.String, Mode: Schema.Int }),
              ),
              SecretID: Schema.String,
              SecretName: Schema.String,
            }),
          ),
        ),
        Configs: Schema.Array(
          Schema.partial(
            Schema.Struct({
              File: Schema.partial(
                Schema.Struct({ Name: Schema.String, UID: Schema.String, GID: Schema.String, Mode: Schema.Int }),
              ),
              Runtime: Schema.partial(Schema.Struct({})),
              ConfigID: Schema.String,
              ConfigName: Schema.String,
            }),
          ),
        ),
        Isolation: Schema.Union(Schema.Literal("default"), Schema.Literal("process"), Schema.Literal("hyperv")),
        Init: Schema.NullOr(Schema.Boolean),
        Sysctls: Schema.Record({ key: Schema.String, value: Schema.String }),
        CapabilityAdd: Schema.Array(Schema.String),
        CapabilityDrop: Schema.Array(Schema.String),
        Ulimits: Schema.Array(
          Schema.partial(Schema.Struct({ Name: Schema.String, Soft: Schema.Int, Hard: Schema.Int })),
        ),
      }),
    ),
    NetworkAttachmentSpec: Schema.partial(Schema.Struct({ ContainerID: Schema.String })),
    Resources: Schema.partial(Schema.Struct({ Limits: Limit, Reservations: ResourceObject })),
    RestartPolicy: Schema.partial(
      Schema.Struct({
        Condition: Schema.Union(Schema.Literal("none"), Schema.Literal("on-failure"), Schema.Literal("any")),
        Delay: Schema.Int,
        MaxAttempts: Int_default_0_prop,
        Window: Int_default_0_prop,
      }),
    ),
    Placement: Schema.partial(
      Schema.Struct({
        Constraints: Schema.Array(Schema.String),
        Preferences: Schema.Array(
          Schema.partial(Schema.Struct({ Spread: Schema.partial(Schema.Struct({ SpreadDescriptor: Schema.String })) })),
        ),
        MaxReplicas: Int_default_0_prop,
        Platforms: Schema.Array(Platform),
      }),
    ),
    ForceUpdate: Schema.Int,
    Runtime: Schema.String,
    Networks: Schema.Array(NetworkAttachmentConfig),
    LogDriver: Schema.partial(
      Schema.Struct({ Name: Schema.String, Options: Schema.Record({ key: Schema.String, value: Schema.String }) }),
    ),
  }),
);
export type TaskSpec = typeof TaskSpec.Type;

export const TaskState = Schema.Union(
  Schema.Literal("new"),
  Schema.Literal("allocated"),
  Schema.Literal("pending"),
  Schema.Literal("assigned"),
  Schema.Literal("accepted"),
  Schema.Literal("preparing"),
  Schema.Literal("ready"),
  Schema.Literal("starting"),
  Schema.Literal("running"),
  Schema.Literal("complete"),
  Schema.Literal("shutdown"),
  Schema.Literal("failed"),
  Schema.Literal("rejected"),
  Schema.Literal("remove"),
  Schema.Literal("orphaned"),
);
export type TaskState = typeof TaskState.Type;

export const Task = Schema.partial(
  Schema.Struct({
    ID: Schema.String,
    Version: ObjectVersion,
    CreatedAt: Schema.String,
    UpdatedAt: Schema.String,
    Name: Schema.String,
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    Spec: TaskSpec,
    ServiceID: Schema.String,
    Slot: Schema.Int,
    NodeID: Schema.String,
    AssignedGenericResources: GenericResources,
    Status: Schema.partial(
      Schema.Struct({
        Timestamp: Schema.String,
        State: TaskState,
        Message: Schema.String,
        Err: Schema.String,
        ContainerStatus: Schema.partial(
          Schema.Struct({ ContainerID: Schema.String, PID: Schema.Int, ExitCode: Schema.Int }),
        ),
      }),
    ),
    DesiredState: TaskState,
    JobIteration: ObjectVersion,
  }),
);
export type Task = typeof Task.Type;

export const EndpointPortConfig = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    Protocol: Schema.Union(Schema.Literal("tcp"), Schema.Literal("udp"), Schema.Literal("sctp")),
    TargetPort: Schema.Int,
    PublishedPort: Schema.Int,
    PublishMode: Union_default_ingress_prop,
  }),
);
export type EndpointPortConfig = typeof EndpointPortConfig.Type;

export const EndpointSpec = Schema.partial(
  Schema.Struct({ Mode: Union_default_vip_prop, Ports: Schema.Array(EndpointPortConfig) }),
);
export type EndpointSpec = typeof EndpointSpec.Type;

export const ServiceSpec = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    TaskTemplate: TaskSpec,
    Mode: Schema.partial(
      Schema.Struct({
        Replicated: Schema.partial(Schema.Struct({ Replicas: Schema.Int })),
        Global: Schema.partial(Schema.Struct({})),
        ReplicatedJob: Schema.partial(
          Schema.Struct({ MaxConcurrent: Int_default_1_prop, TotalCompletions: Schema.Int }),
        ),
        GlobalJob: Schema.partial(Schema.Struct({})),
      }),
    ),
    UpdateConfig: Schema.partial(
      Schema.Struct({
        Parallelism: Schema.Int,
        Delay: Schema.Int,
        FailureAction: Schema.Union(Schema.Literal("continue"), Schema.Literal("pause"), Schema.Literal("rollback")),
        Monitor: Schema.Int,
        MaxFailureRatio: Schema.Number,
        Order: Schema.Union(Schema.Literal("stop-first"), Schema.Literal("start-first")),
      }),
    ),
    RollbackConfig: Schema.partial(
      Schema.Struct({
        Parallelism: Schema.Int,
        Delay: Schema.Int,
        FailureAction: Schema.Union(Schema.Literal("continue"), Schema.Literal("pause")),
        Monitor: Schema.Int,
        MaxFailureRatio: Schema.Number,
        Order: Schema.Union(Schema.Literal("stop-first"), Schema.Literal("start-first")),
      }),
    ),
    Networks: Schema.Array(NetworkAttachmentConfig),
    EndpointSpec: EndpointSpec,
  }),
);
export type ServiceSpec = typeof ServiceSpec.Type;

export const Service = Schema.partial(
  Schema.Struct({
    ID: Schema.String,
    Version: ObjectVersion,
    CreatedAt: Schema.String,
    UpdatedAt: Schema.String,
    Spec: ServiceSpec,
    Endpoint: Schema.partial(
      Schema.Struct({
        Spec: EndpointSpec,
        Ports: Schema.Array(EndpointPortConfig),
        VirtualIPs: Schema.Array(Schema.partial(Schema.Struct({ NetworkID: Schema.String, Addr: Schema.String }))),
      }),
    ),
    UpdateStatus: Schema.partial(
      Schema.Struct({
        State: Schema.Union(Schema.Literal("updating"), Schema.Literal("paused"), Schema.Literal("completed")),
        StartedAt: Schema.String,
        CompletedAt: Schema.String,
        Message: Schema.String,
      }),
    ),
    ServiceStatus: Schema.partial(
      Schema.Struct({ RunningTasks: Schema.Int, DesiredTasks: Schema.Int, CompletedTasks: Schema.Int }),
    ),
    JobStatus: Schema.partial(Schema.Struct({ JobIteration: ObjectVersion, LastExecution: Schema.String })),
  }),
);
export type Service = typeof Service.Type;

export const ImageDeleteResponseItem = Schema.partial(
  Schema.Struct({ Untagged: Schema.String, Deleted: Schema.String }),
);
export type ImageDeleteResponseItem = typeof ImageDeleteResponseItem.Type;

export const ServiceUpdateResponse = Schema.partial(Schema.Struct({ Warnings: Schema.Array(Schema.String) }));
export type ServiceUpdateResponse = typeof ServiceUpdateResponse.Type;

export const ContainerSummary = Schema.partial(
  Schema.Struct({
    Id: Schema.String,
    Names: Schema.Array(Schema.String),
    Image: Schema.String,
    ImageID: Schema.String,
    Command: Schema.String,
    Created: Schema.Int,
    Ports: Schema.Array(Port),
    SizeRw: Schema.Int,
    SizeRootFs: Schema.Int,
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    State: Schema.String,
    Status: Schema.String,
    HostConfig: Schema.partial(Schema.Struct({ NetworkMode: Schema.String })),
    NetworkSettings: Schema.partial(
      Schema.Struct({ Networks: Schema.Record({ key: Schema.String, value: EndpointSettings }) }),
    ),
    Mounts: Schema.Array(MountPoint),
  }),
);
export type ContainerSummary = typeof ContainerSummary.Type;

export const Driver = Schema.Struct({
  Name: Schema.String,
  Options: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
});
export type Driver = typeof Driver.Type;

export const SecretSpec = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    Data: Schema.String,
    Driver: Driver,
    Templating: Driver,
  }),
);
export type SecretSpec = typeof SecretSpec.Type;

export const Secret = Schema.partial(
  Schema.Struct({
    ID: Schema.String,
    Version: ObjectVersion,
    CreatedAt: Schema.String,
    UpdatedAt: Schema.String,
    Spec: SecretSpec,
  }),
);
export type Secret = typeof Secret.Type;

export const ConfigSpec = Schema.partial(
  Schema.Struct({
    Name: Schema.String,
    Labels: Schema.Record({ key: Schema.String, value: Schema.String }),
    Data: Schema.String,
    Templating: Driver,
  }),
);
export type ConfigSpec = typeof ConfigSpec.Type;

export const Config = Schema.partial(
  Schema.Struct({
    ID: Schema.String,
    Version: ObjectVersion,
    CreatedAt: Schema.String,
    UpdatedAt: Schema.String,
    Spec: ConfigSpec,
  }),
);
export type Config = typeof Config.Type;

export const ContainerState = Schema.NullOr(
  Schema.partial(
    Schema.Struct({
      Status: Schema.Union(
        Schema.Literal("created"),
        Schema.Literal("running"),
        Schema.Literal("paused"),
        Schema.Literal("restarting"),
        Schema.Literal("removing"),
        Schema.Literal("exited"),
        Schema.Literal("dead"),
      ),
      Running: Schema.Boolean,
      Paused: Schema.Boolean,
      Restarting: Schema.Boolean,
      OOMKilled: Schema.Boolean,
      Dead: Schema.Boolean,
      Pid: Schema.Int,
      ExitCode: Schema.Int,
      Error: Schema.String,
      StartedAt: Schema.String,
      FinishedAt: Schema.String,
      Health: Health,
    }),
  ),
);
export type ContainerState = typeof ContainerState.Type;

export const ContainerCreateResponse = Schema.Struct({ Id: Schema.String, Warnings: Schema.Array(Schema.String) });
export type ContainerCreateResponse = typeof ContainerCreateResponse.Type;

export const ContainerWaitExitError = Schema.partial(Schema.Struct({ Message: Schema.String }));
export type ContainerWaitExitError = typeof ContainerWaitExitError.Type;

export const ContainerWaitResponse = Schema.Struct({
  StatusCode: Schema.Int,
  Error: Schema.optional(ContainerWaitExitError),
});
export type ContainerWaitResponse = typeof ContainerWaitResponse.Type;

export const SystemVersion = Schema.partial(
  Schema.Struct({
    Platform: Schema.Struct({ Name: Schema.String }),
    Components: Schema.Array(
      Schema.Struct({
        Name: Schema.String,
        Version: Schema.String,
        Details: Schema.optional(Schema.NullOr(Schema.partial(Schema.Struct({})))),
      }),
    ),
    Version: Schema.String,
    ApiVersion: Schema.String,
    MinAPIVersion: Schema.String,
    GitCommit: Schema.String,
    GoVersion: Schema.String,
    Os: Schema.String,
    Arch: Schema.String,
    KernelVersion: Schema.String,
    Experimental: Schema.Boolean,
    BuildTime: Schema.String,
  }),
);
export type SystemVersion = typeof SystemVersion.Type;

export const PluginsInfo = Schema.partial(
  Schema.Struct({
    Volume: Schema.Array(Schema.String),
    Network: Schema.Array(Schema.String),
    Authorization: Schema.Array(Schema.String),
    Log: Schema.Array(Schema.String),
  }),
);
export type PluginsInfo = typeof PluginsInfo.Type;

export const IndexInfo = Schema.NullOr(
  Schema.partial(
    Schema.Struct({
      Name: Schema.String,
      Mirrors: Schema.Array(Schema.String),
      Secure: Schema.Boolean,
      Official: Schema.Boolean,
    }),
  ),
);
export type IndexInfo = typeof IndexInfo.Type;

export const RegistryServiceConfig = Schema.NullOr(
  Schema.partial(
    Schema.Struct({
      AllowNondistributableArtifactsCIDRs: Schema.Array(Schema.String),
      AllowNondistributableArtifactsHostnames: Schema.Array(Schema.String),
      InsecureRegistryCIDRs: Schema.Array(Schema.String),
      IndexConfigs: Schema.Record({ key: Schema.String, value: IndexInfo }),
      Mirrors: Schema.Array(Schema.String),
    }),
  ),
);
export type RegistryServiceConfig = typeof RegistryServiceConfig.Type;

export const Runtime = Schema.partial(
  Schema.Struct({ path: Schema.String, runtimeArgs: Schema.NullOr(Schema.Array(Schema.String)) }),
);
export type Runtime = typeof Runtime.Type;

export const LocalNodeState = Union_default_value;
export type LocalNodeState = typeof LocalNodeState.Type;

export const PeerNode = Schema.partial(Schema.Struct({ NodeID: Schema.String, Addr: Schema.String }));
export type PeerNode = typeof PeerNode.Type;

export const SwarmInfo = Schema.partial(
  Schema.Struct({
    NodeID: String_default_value_prop,
    NodeAddr: String_default_value_prop,
    LocalNodeState: LocalNodeState,
    ControlAvailable: Boolean_default_false_prop,
    Error: String_default_value_prop,
    RemoteManagers: Schema.NullOr(Schema.Array(PeerNode)),
    Nodes: Schema.NullOr(Schema.Int),
    Managers: Schema.NullOr(Schema.Int),
    Cluster: ClusterInfo,
  }),
);
export type SwarmInfo = typeof SwarmInfo.Type;

export const Commit = Schema.partial(Schema.Struct({ ID: Schema.String, Expected: Schema.String }));
export type Commit = typeof Commit.Type;

export const SystemInfo = Schema.partial(
  Schema.Struct({
    ID: Schema.String,
    Containers: Schema.Int,
    ContainersRunning: Schema.Int,
    ContainersPaused: Schema.Int,
    ContainersStopped: Schema.Int,
    Images: Schema.Int,
    Driver: Schema.String,
    DriverStatus: Schema.Array(Schema.Array(Schema.String)),
    DockerRootDir: Schema.String,
    Plugins: PluginsInfo,
    MemoryLimit: Schema.Boolean,
    SwapLimit: Schema.Boolean,
    KernelMemoryTCP: Schema.Boolean,
    CpuCfsPeriod: Schema.Boolean,
    CpuCfsQuota: Schema.Boolean,
    CPUShares: Schema.Boolean,
    CPUSet: Schema.Boolean,
    PidsLimit: Schema.Boolean,
    OomKillDisable: Schema.Boolean,
    IPv4Forwarding: Schema.Boolean,
    BridgeNfIptables: Schema.Boolean,
    BridgeNfIp6tables: Schema.Boolean,
    Debug: Schema.Boolean,
    NFd: Schema.Int,
    NGoroutines: Schema.Int,
    SystemTime: Schema.String,
    LoggingDriver: Schema.String,
    CgroupDriver: Union_default_cgroupfs_prop,
    CgroupVersion: Union_default_1_prop,
    NEventsListener: Schema.Int,
    KernelVersion: Schema.String,
    OperatingSystem: Schema.String,
    OSVersion: Schema.String,
    OSType: Schema.String,
    Architecture: Schema.String,
    NCPU: Schema.Int,
    MemTotal: Schema.Int,
    IndexServerAddress: String_default_https_index_docker_io_v1_prop,
    RegistryConfig: RegistryServiceConfig,
    GenericResources: GenericResources,
    HttpProxy: Schema.String,
    HttpsProxy: Schema.String,
    NoProxy: Schema.String,
    Name: Schema.String,
    Labels: Schema.Array(Schema.String),
    ExperimentalBuild: Schema.Boolean,
    ServerVersion: Schema.String,
    Runtimes: Schema.Record({ key: Schema.String, value: Runtime }),
    DefaultRuntime: String_default_runc_prop,
    Swarm: SwarmInfo,
    LiveRestoreEnabled: Boolean_default_false_prop,
    Isolation: Union_default_default_prop,
    InitBinary: Schema.String,
    ContainerdCommit: Commit,
    RuncCommit: Commit,
    InitCommit: Commit,
    SecurityOptions: Schema.Array(Schema.String),
    ProductLicense: Schema.String,
    DefaultAddressPools: Schema.Array(Schema.partial(Schema.Struct({ Base: Schema.String, Size: Schema.Int }))),
    Warnings: Schema.Array(Schema.String),
  }),
);
export type SystemInfo = typeof SystemInfo.Type;

export const EventActor = Schema.partial(
  Schema.Struct({ ID: Schema.String, Attributes: Schema.Record({ key: Schema.String, value: Schema.String }) }),
);
export type EventActor = typeof EventActor.Type;

export const EventMessage = Schema.partial(
  Schema.Struct({
    Type: Schema.Union(
      Schema.Literal("builder"),
      Schema.Literal("config"),
      Schema.Literal("container"),
      Schema.Literal("daemon"),
      Schema.Literal("image"),
      Schema.Literal("network"),
      Schema.Literal("node"),
      Schema.Literal("plugin"),
      Schema.Literal("secret"),
      Schema.Literal("service"),
      Schema.Literal("volume"),
    ),
    Action: Schema.String,
    Actor: EventActor,
    scope: Schema.Union(Schema.Literal("local"), Schema.Literal("swarm")),
    time: Schema.Int,
    timeNano: Schema.Int,
  }),
);
export type EventMessage = typeof EventMessage.Type;

export const OCIDescriptor = Schema.partial(
  Schema.Struct({ mediaType: Schema.String, digest: Schema.String, size: Schema.Int }),
);
export type OCIDescriptor = typeof OCIDescriptor.Type;

export const OCIPlatform = Schema.partial(
  Schema.Struct({
    architecture: Schema.String,
    os: Schema.String,
    "os.version": Schema.String,
    "os.features": Schema.Array(Schema.String),
    variant: Schema.String,
  }),
);
export type OCIPlatform = typeof OCIPlatform.Type;

export const DistributionInspect = Schema.Struct({ Descriptor: OCIDescriptor, Platforms: Schema.Array(OCIPlatform) });
export type DistributionInspect = typeof DistributionInspect.Type;

// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          all: BooleanFromString_default_false_prop,
          limit: Schema.NumberFromString.pipe(Schema.int()),
          size: BooleanFromString_default_false_prop,
          filters: Schema.String,
        }),
      ),
    ),
  },
  responses: { 200: Schema.Array(ContainerSummary), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          name: Schema.String.pipe(Schema.pattern(new RegExp("^/?[a-zA-Z0-9][a-zA-Z0-9_.-]+$"))),
          platform: Schema.String,
        }),
      ),
    ),
    body: Schema.extend(
      ContainerConfig,
      Schema.partial(Schema.Struct({ HostConfig: HostConfig, NetworkingConfig: NetworkingConfig })),
    ),
  },
  responses: {
    201: ContainerCreateResponse,
    400: ErrorResponse,
    404: ErrorResponse,
    409: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ size: BooleanFromString_default_false_prop }))),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: {
    200: Schema.partial(
      Schema.Struct({
        Id: Schema.String,
        Created: Schema.String,
        Path: Schema.String,
        Args: Schema.Array(Schema.String),
        State: ContainerState,
        Image: Schema.String,
        ResolvConfPath: Schema.String,
        HostnamePath: Schema.String,
        HostsPath: Schema.String,
        LogPath: Schema.String,
        Name: Schema.String,
        RestartCount: Schema.Int,
        Driver: Schema.String,
        Platform: Schema.String,
        MountLabel: Schema.String,
        ProcessLabel: Schema.String,
        AppArmorProfile: Schema.String,
        ExecIDs: Schema.NullOr(Schema.Array(Schema.String)),
        HostConfig: HostConfig,
        GraphDriver: GraphDriverData,
        SizeRw: Schema.Int,
        SizeRootFs: Schema.Int,
        Mounts: Schema.Array(MountPoint),
        Config: ContainerConfig,
        NetworkSettings: NetworkSettings,
      }),
    ),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/top"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ ps_args: String_default_neg_ef_prop }))),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: {
    200: Schema.partial(
      Schema.Struct({ Titles: Schema.Array(Schema.String), Processes: Schema.Array(Schema.Array(Schema.String)) }),
    ),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/logs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          follow: BooleanFromString_default_false_prop,
          stdout: BooleanFromString_default_false_prop,
          stderr: BooleanFromString_default_false_prop,
          since: Schema_default_0_prop,
          until: Schema_default_0_prop,
          timestamps: BooleanFromString_default_false_prop,
          tail: String_default_all_prop,
        }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/changes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Array(FilesystemChange), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/export"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/stats"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          stream: BooleanFromString_default_true_prop,
          "one-shot": BooleanFromString_default_false_prop,
        }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: {
    200: Schema.Record({ key: Schema.String, value: Schema.Unknown }),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/resize"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({ h: Schema.NumberFromString.pipe(Schema.int()), w: Schema.NumberFromString.pipe(Schema.int()) }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/start"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ detachKeys: Schema.String }))),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 204: Schema.Unknown, 304: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/stop"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(Schema.Struct({ signal: Schema.String, t: Schema.NumberFromString.pipe(Schema.int()) })),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 204: Schema.Unknown, 304: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/restart"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(Schema.Struct({ signal: Schema.String, t: Schema.NumberFromString.pipe(Schema.int()) })),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/kill"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ signal: String_default_SIGKILL_prop }))),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    path: Schema.Struct({ id: Schema.String }),
    body: Schema.extend(Resources, Schema.partial(Schema.Struct({ RestartPolicy: RestartPolicy }))),
  },
  responses: {
    200: Schema.partial(Schema.Struct({ Warnings: Schema.Array(Schema.String) })),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/rename"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ name: Schema.String }), path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/pause"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/unpause"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/attach"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          detachKeys: Schema.String,
          logs: BooleanFromString_default_false_prop,
          stream: BooleanFromString_default_false_prop,
          stdin: BooleanFromString_default_false_prop,
          stdout: BooleanFromString_default_false_prop,
          stderr: BooleanFromString_default_false_prop,
        }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: {
    101: Schema.Unknown,
    200: Schema.Unknown,
    400: Schema.Unknown,
    404: Schema.Unknown,
    500: Schema.Unknown,
  },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/attach/ws"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          detachKeys: Schema.String,
          logs: BooleanFromString_default_false_prop,
          stream: BooleanFromString_default_false_prop,
          stdin: BooleanFromString_default_false_prop,
          stdout: BooleanFromString_default_false_prop,
          stderr: BooleanFromString_default_false_prop,
        }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 101: Schema.Unknown, 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/wait"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ condition: Union_default_notneg_running_prop }))),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: ContainerWaitResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/containers/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          v: BooleanFromString_default_false_prop,
          force: BooleanFromString_default_false_prop,
          link: BooleanFromString_default_false_prop,
        }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 204: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/containers/{id}/archive"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ path: Schema.String }), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 400: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/containers/{id}/archive"),
  requestFormat: Schema.Literal("binary"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({
      path: Schema.String,
      noOverwriteDirNonDir: Schema.optional(Schema.String),
      copyUIDGID: Schema.optional(Schema.String),
    }),
    path: Schema.Struct({ id: Schema.String }),
    body: Schema.declare((v): v is Blob => typeof Blob !== "undefined" && v instanceof Blob),
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: Schema.Literal("HEAD"),
  path: Schema.Literal("/containers/{id}/archive"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ path: Schema.String }), path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
  responseHeaders: { 200: Schema.Struct({ "X-Docker-Container-Path-Stat": Schema.String }) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: {
    200: Schema.partial(Schema.Struct({ ContainersDeleted: Schema.Array(Schema.String), SpaceReclaimed: Schema.Int })),
    500: ErrorResponse,
  },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          all: BooleanFromString_default_false_prop,
          filters: Schema.String,
          "shared-size": BooleanFromString_default_false_prop,
          digests: BooleanFromString_default_false_prop,
        }),
      ),
    ),
  },
  responses: { 200: Schema.Array(ImageSummary), 500: ErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/build"),
  requestFormat: Schema.Literal("binary"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          dockerfile: String_default_Dockerfile_prop,
          t: Schema.String,
          extrahosts: Schema.String,
          remote: Schema.String,
          q: BooleanFromString_default_false_prop,
          nocache: BooleanFromString_default_false_prop,
          cachefrom: Schema.String,
          pull: Schema.String,
          rm: BooleanFromString_default_true_prop,
          forcerm: BooleanFromString_default_false_prop,
          memory: Schema.NumberFromString.pipe(Schema.int()),
          memswap: Schema.NumberFromString.pipe(Schema.int()),
          cpushares: Schema.NumberFromString.pipe(Schema.int()),
          cpusetcpus: Schema.String,
          cpuperiod: Schema.NumberFromString.pipe(Schema.int()),
          cpuquota: Schema.NumberFromString.pipe(Schema.int()),
          buildargs: Schema.String,
          shmsize: Schema.NumberFromString.pipe(Schema.int()),
          squash: Schema.BooleanFromString,
          labels: Schema.String,
          networkmode: Schema.String,
          platform: Schema.String,
          target: Schema.String,
          outputs: Schema.String,
        }),
      ),
    ),
    header: Schema.optional(
      Schema.partial(
        Schema.Struct({ "Content-type": Schema.Literal("application/x-tar"), "X-Registry-Config": Schema.String }),
      ),
    ),
    body: Schema.declare((v): v is Blob => typeof Blob !== "undefined" && v instanceof Blob),
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 500: ErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/build/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          "keep-storage": Schema.NumberFromString.pipe(Schema.int()),
          all: Schema.BooleanFromString,
          filters: Schema.String,
        }),
      ),
    ),
  },
  responses: {
    200: Schema.partial(Schema.Struct({ CachesDeleted: Schema.Array(Schema.String), SpaceReclaimed: Schema.Int })),
    500: ErrorResponse,
  },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/create"),
  requestFormat: Schema.Literal("text"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          fromImage: Schema.String,
          fromSrc: Schema.String,
          repo: Schema.String,
          tag: Schema.String,
          message: Schema.String,
          changes: Schema.Array(Schema.String),
          platform: Schema.String,
        }),
      ),
    ),
    header: Schema.optional(Schema.partial(Schema.Struct({ "X-Registry-Auth": Schema.String }))),
    body: Schema.String,
  },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/{name}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: ImageInspect, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/{name}/history"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: {
    200: Schema.Array(
      Schema.Struct({
        Id: Schema.String,
        Created: Schema.Int,
        CreatedBy: Schema.String,
        Tags: Schema.Array(Schema.String),
        Size: Schema.Int,
        Comment: Schema.String,
      }),
    ),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/{name}/push"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ tag: Schema.String }))),
    path: Schema.Struct({ name: Schema.String }),
    header: Schema.Struct({ "X-Registry-Auth": Schema.String }),
  },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/{name}/tag"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ repo: Schema.String, tag: Schema.String }))),
    path: Schema.Struct({ name: Schema.String }),
  },
  responses: { 201: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/images/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({ force: BooleanFromString_default_false_prop, noprune: BooleanFromString_default_false_prop }),
      ),
    ),
    path: Schema.Struct({ name: Schema.String }),
  },
  responses: { 200: Schema.Array(ImageDeleteResponseItem), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/search"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({
      term: Schema.String,
      limit: Schema.optional(Schema.NumberFromString.pipe(Schema.int())),
      filters: Schema.optional(Schema.String),
    }),
  },
  responses: {
    200: Schema.Array(
      Schema.partial(
        Schema.Struct({
          description: Schema.String,
          is_official: Schema.Boolean,
          is_automated: Schema.Boolean,
          name: Schema.String,
          star_count: Schema.Int,
        }),
      ),
    ),
    500: ErrorResponse,
  },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: {
    200: Schema.partial(
      Schema.Struct({ ImagesDeleted: Schema.Array(ImageDeleteResponseItem), SpaceReclaimed: Schema.Int }),
    ),
    500: ErrorResponse,
  },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/auth"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: AuthConfig },
  responses: {
    200: Schema.Struct({ Status: Schema.String, IdentityToken: Schema.optional(Schema.String) }),
    204: Schema.Unknown,
    401: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/info"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: SystemInfo, 500: ErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/version"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: SystemVersion, 500: ErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/_ping"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Schema.Unknown, 500: Schema.Unknown },
  responseHeaders: {
    200: Schema.Struct({
      Swarm: Union_default_inactive_prop,
      "Docker-Experimental": Schema.Boolean,
      "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop,
      Pragma: String_default_noneg_cache_prop,
      "API-Version": Schema.String,
      "Builder-Version": String_default_2_prop,
    }),
    500: Schema.Struct({
      "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop,
      Pragma: String_default_noneg_cache_prop,
    }),
  },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: Schema.Literal("HEAD"),
  path: Schema.Literal("/_ping"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Schema.Unknown, 500: Schema.Unknown },
  responseHeaders: {
    200: Schema.Struct({
      Swarm: Union_default_inactive_prop,
      "Docker-Experimental": Schema.Boolean,
      "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop,
      Pragma: String_default_noneg_cache_prop,
      "API-Version": Schema.String,
      "Builder-Version": Schema.String,
    }),
  },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/commit"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          container: Schema.String,
          repo: Schema.String,
          tag: Schema.String,
          comment: Schema.String,
          author: Schema.String,
          pause: BooleanFromString_default_true_prop,
          changes: Schema.String,
        }),
      ),
    ),
    body: ContainerConfig,
  },
  responses: { 201: IdResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/events"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(Schema.Struct({ since: Schema.String, until: Schema.String, filters: Schema.String })),
    ),
  },
  responses: { 200: EventMessage, 400: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/system/df"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          type: Schema.Array(
            Schema.Union(
              Schema.Literal("container"),
              Schema.Literal("image"),
              Schema.Literal("volume"),
              Schema.Literal("build-cache"),
            ),
          ),
        }),
      ),
    ),
  },
  responses: {
    200: Schema.partial(
      Schema.Struct({
        LayersSize: Schema.Int,
        Images: Schema.Array(ImageSummary),
        Containers: Schema.Array(ContainerSummary),
        Volumes: Schema.Array(Volume),
        BuildCache: Schema.Array(BuildCache),
      }),
    ),
    500: ErrorResponse,
  },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/{name}/get"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Schema.Unknown, 500: Schema.Unknown },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/images/get"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ names: Schema.Array(Schema.String) }))) },
  responses: { 200: Schema.Unknown, 500: Schema.Unknown },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/images/load"),
  requestFormat: Schema.Literal("text"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ quiet: BooleanFromString_default_false_prop }))),
  },
  responses: { 200: Schema.Unknown, 500: ErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/containers/{id}/exec"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    path: Schema.Struct({ id: Schema.String }),
    body: Schema.optional(
      Schema.partial(
        Schema.Struct({
          AttachStdin: Schema.Boolean,
          AttachStdout: Schema.Boolean,
          AttachStderr: Schema.Boolean,
          ConsoleSize: Schema.NullOr(
            Schema.Array(Schema.Int.pipe(Schema.greaterThanOrEqualTo(0))).pipe(Schema.minItems(2), Schema.maxItems(2)),
          ),
          DetachKeys: Schema.String,
          Tty: Schema.Boolean,
          Env: Schema.Array(Schema.String),
          Cmd: Schema.Array(Schema.String),
          Privileged: Boolean_default_false_prop,
          User: Schema.String,
          WorkingDir: Schema.String,
        }),
      ),
    ),
  },
  responses: { 201: IdResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/exec/{id}/start"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    path: Schema.Struct({ id: Schema.String }),
    body: Schema.optional(
      Schema.partial(
        Schema.Struct({
          Detach: Schema.Boolean,
          Tty: Schema.Boolean,
          ConsoleSize: Schema.NullOr(
            Schema.Array(Schema.Int.pipe(Schema.greaterThanOrEqualTo(0))).pipe(Schema.minItems(2), Schema.maxItems(2)),
          ),
        }),
      ),
    ),
  },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 409: Schema.Unknown },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/exec/{id}/resize"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({ h: Schema.NumberFromString.pipe(Schema.int()), w: Schema.NumberFromString.pipe(Schema.int()) }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/exec/{id}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: {
    200: Schema.partial(
      Schema.Struct({
        CanRemove: Schema.Boolean,
        DetachKeys: Schema.String,
        ID: Schema.String,
        Running: Schema.Boolean,
        ExitCode: Schema.Int,
        ProcessConfig: ProcessConfig,
        OpenStdin: Schema.Boolean,
        OpenStderr: Schema.Boolean,
        OpenStdout: Schema.Boolean,
        ContainerID: Schema.String,
        Pid: Schema.Int,
      }),
    ),
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/volumes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: { 200: VolumeListResponse, 500: ErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/volumes/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: VolumeCreateOptions },
  responses: { 201: Volume, 500: ErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/volumes/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Volume, 404: ErrorResponse, 500: ErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: Schema.Literal("PUT"),
  path: Schema.Literal("/volumes/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({ version: Schema.NumberFromString.pipe(Schema.int()) }),
    path: Schema.Struct({ name: Schema.String }),
    body: Schema.optional(Schema.partial(Schema.Struct({ Spec: ClusterVolumeSpec }))),
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/volumes/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ force: BooleanFromString_default_false_prop }))),
    path: Schema.Struct({ name: Schema.String }),
  },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/volumes/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: {
    200: Schema.partial(Schema.Struct({ VolumesDeleted: Schema.Array(Schema.String), SpaceReclaimed: Schema.Int })),
    500: ErrorResponse,
  },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/networks"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: { 200: Schema.Array(Network), 500: ErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/networks/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(Schema.Struct({ verbose: BooleanFromString_default_false_prop, scope: Schema.String })),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: Network, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/networks/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/networks/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    body: Schema.Struct({
      Name: Schema.String,
      CheckDuplicate: Schema.optional(Schema.Boolean),
      Driver: String_default_bridge_prop,
      Internal: Schema.optional(Schema.Boolean),
      Attachable: Schema.optional(Schema.Boolean),
      Ingress: Schema.optional(Schema.Boolean),
      IPAM: Schema.optional(IPAM),
      EnableIPv6: Schema.optional(Schema.Boolean),
      Options: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
      Labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    }),
  },
  responses: {
    201: Schema.partial(Schema.Struct({ Id: Schema.String, Warning: Schema.String })),
    403: ErrorResponse,
    404: ErrorResponse,
    500: ErrorResponse,
  },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/networks/{id}/connect"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    path: Schema.Struct({ id: Schema.String }),
    body: Schema.optional(
      Schema.partial(Schema.Struct({ Container: Schema.String, EndpointConfig: EndpointSettings })),
    ),
  },
  responses: { 200: Schema.Unknown, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/networks/{id}/disconnect"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    path: Schema.Struct({ id: Schema.String }),
    body: Schema.optional(Schema.partial(Schema.Struct({ Container: Schema.String, Force: Schema.Boolean }))),
  },
  responses: { 200: Schema.Unknown, 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/networks/prune"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: {
    200: Schema.partial(Schema.Struct({ NetworksDeleted: Schema.Array(Schema.String) })),
    500: ErrorResponse,
  },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/plugins"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: { 200: Schema.Array(Plugin), 500: ErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/plugins/privileges"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ remote: Schema.String }) },
  responses: { 200: Schema.Array(PluginPrivilege), 500: ErrorResponse },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/pull"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({ remote: Schema.String, name: Schema.optional(Schema.String) }),
    header: Schema.optional(Schema.partial(Schema.Struct({ "X-Registry-Auth": Schema.String }))),
    body: Schema.Array(PluginPrivilege),
  },
  responses: { 204: Schema.Unknown, 500: ErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/plugins/{name}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/plugins/{name}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ force: BooleanFromString_default_false_prop }))),
    path: Schema.Struct({ name: Schema.String }),
  },
  responses: { 200: Plugin, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/enable"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ timeout: Schema_default_0_prop }))),
    path: Schema.Struct({ name: Schema.String }),
  },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/disable"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ force: Schema.BooleanFromString }))),
    path: Schema.Struct({ name: Schema.String }),
  },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/upgrade"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({ remote: Schema.String }),
    path: Schema.Struct({ name: Schema.String }),
    header: Schema.optional(Schema.partial(Schema.Struct({ "X-Registry-Auth": Schema.String }))),
    body: Schema.Array(PluginPrivilege),
  },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/create"),
  requestFormat: Schema.Literal("text"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.Struct({ name: Schema.String }) },
  responses: { 204: Schema.Unknown, 500: ErrorResponse },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/push"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/plugins/{name}/set"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }), body: Schema.Array(Schema.String) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/nodes"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: { 200: Schema.Array(Node), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/nodes/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Node, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/nodes/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ force: BooleanFromString_default_false_prop }))),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/nodes/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({ version: Schema.NumberFromString.pipe(Schema.int()) }),
    path: Schema.Struct({ id: Schema.String }),
    body: NodeSpec,
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/swarm"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 200: Swarm, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/init"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    body: Schema.optional(
      Schema.partial(
        Schema.Struct({
          ListenAddr: Schema.String,
          AdvertiseAddr: Schema.String,
          DataPathAddr: Schema.String,
          DataPathPort: Schema.Int,
          DefaultAddrPool: Schema.Array(Schema.String),
          ForceNewCluster: Schema.Boolean,
          SubnetSize: Schema.Int,
          Spec: SwarmSpec,
        }),
      ),
    ),
  },
  responses: { 200: Schema.String, 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/join"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    body: Schema.optional(
      Schema.partial(
        Schema.Struct({
          ListenAddr: Schema.String,
          AdvertiseAddr: Schema.String,
          DataPathAddr: Schema.String,
          RemoteAddrs: Schema.Array(Schema.String),
          JoinToken: Schema.String,
        }),
      ),
    ),
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/leave"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ force: BooleanFromString_default_false_prop }))),
  },
  responses: { 200: Schema.Unknown, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({
      version: Schema.NumberFromString.pipe(Schema.int()),
      rotateWorkerToken: BooleanFromString_default_false_prop,
      rotateManagerToken: BooleanFromString_default_false_prop,
      rotateManagerUnlockKey: BooleanFromString_default_false_prop,
    }),
    body: SwarmSpec,
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/swarm/unlockkey"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: {
    200: Schema.partial(Schema.Struct({ UnlockKey: Schema.String })),
    500: ErrorResponse,
    503: ErrorResponse,
  },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/swarm/unlock"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.optional(Schema.partial(Schema.Struct({ UnlockKey: Schema.String }))) },
  responses: { 200: Schema.Unknown, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/services"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String, status: Schema.BooleanFromString }))),
  },
  responses: { 200: Schema.Array(Service), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/services/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    header: Schema.optional(Schema.partial(Schema.Struct({ "X-Registry-Auth": Schema.String }))),
    body: Schema.extend(ServiceSpec, Schema.Record({ key: Schema.String, value: Schema.Unknown })),
  },
  responses: {
    201: Schema.partial(Schema.Struct({ ID: Schema.String, Warning: Schema.String })),
    400: ErrorResponse,
    403: ErrorResponse,
    409: ErrorResponse,
    500: ErrorResponse,
    503: ErrorResponse,
  },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/services/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(Schema.partial(Schema.Struct({ insertDefaults: BooleanFromString_default_false_prop }))),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: Service, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/services/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/services/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({
      version: Schema.NumberFromString.pipe(Schema.int()),
      registryAuthFrom: Union_default_spec_prop,
      rollback: Schema.optional(Schema.String),
    }),
    path: Schema.Struct({ id: Schema.String }),
    header: Schema.optional(Schema.partial(Schema.Struct({ "X-Registry-Auth": Schema.String }))),
    body: Schema.extend(ServiceSpec, Schema.Record({ key: Schema.String, value: Schema.Unknown })),
  },
  responses: {
    200: ServiceUpdateResponse,
    400: ErrorResponse,
    404: ErrorResponse,
    500: ErrorResponse,
    503: ErrorResponse,
  },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/services/{id}/logs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          details: BooleanFromString_default_false_prop,
          follow: BooleanFromString_default_false_prop,
          stdout: BooleanFromString_default_false_prop,
          stderr: BooleanFromString_default_false_prop,
          since: Schema_default_0_prop,
          timestamps: BooleanFromString_default_false_prop,
          tail: String_default_all_prop,
        }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown, 503: Schema.Unknown },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/tasks"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: { 200: Schema.Array(Task), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/tasks/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Task, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/tasks/{id}/logs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.optional(
      Schema.partial(
        Schema.Struct({
          details: BooleanFromString_default_false_prop,
          follow: BooleanFromString_default_false_prop,
          stdout: BooleanFromString_default_false_prop,
          stderr: BooleanFromString_default_false_prop,
          since: Schema_default_0_prop,
          timestamps: BooleanFromString_default_false_prop,
          tail: String_default_all_prop,
        }),
      ),
    ),
    path: Schema.Struct({ id: Schema.String }),
  },
  responses: { 200: Schema.Unknown, 404: Schema.Unknown, 500: Schema.Unknown, 503: Schema.Unknown },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/secrets"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: { 200: Schema.Array(Secret), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/secrets/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.extend(SecretSpec, Schema.Record({ key: Schema.String, value: Schema.Unknown })) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/secrets/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Secret, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/secrets/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/secrets/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({ version: Schema.NumberFromString.pipe(Schema.int()) }),
    path: Schema.Struct({ id: Schema.String }),
    body: SecretSpec,
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/configs"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { query: Schema.optional(Schema.partial(Schema.Struct({ filters: Schema.String }))) },
  responses: { 200: Schema.Array(Config), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/configs/create"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { body: Schema.extend(ConfigSpec, Schema.Record({ key: Schema.String, value: Schema.Unknown })) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/configs/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 200: Config, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: Schema.Literal("DELETE"),
  path: Schema.Literal("/configs/{id}"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ id: Schema.String }) },
  responses: { 204: Schema.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/configs/{id}/update"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: {
    query: Schema.Struct({ version: Schema.NumberFromString.pipe(Schema.int()) }),
    path: Schema.Struct({ id: Schema.String }),
    body: ConfigSpec,
  },
  responses: { 200: Schema.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: Schema.Literal("GET"),
  path: Schema.Literal("/distribution/{name}/json"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: { path: Schema.Struct({ name: Schema.String }) },
  responses: { 200: DistributionInspect, 401: ErrorResponse, 500: ErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: Schema.Literal("POST"),
  path: Schema.Literal("/session"),
  requestFormat: Schema.Literal("json"),
  responseFormat: Schema.Literal("json"),
  parameters: Schema.Never,
  responses: { 101: Schema.Unknown, 400: Schema.Unknown, 500: Schema.Unknown },
};

// </Endpoints>

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
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: unknown;
  header?: unknown;
  path?: unknown;
  cookie?: unknown;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";

// <EndpointRequestFormats>
/** Non-json request body encodings; missing entries default to `"json"`. */
export const endpointRequestFormats = {
  post: {
    "/build": "binary",
    "/images/create": "text",
    "/images/load": "text",
    "/plugins/create": "text",
  },
  put: {
    "/containers/{id}/archive": "binary",
  },
} as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
// </EndpointRequestFormats>

// <EndpointResponseFormats>
/** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
export const endpointResponseFormats = {} as Partial<{
  [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }>;
}>;
// </EndpointResponseFormats>

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  responses?: Record<string, unknown>;
  responseHeaders?: Record<string, unknown>;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  responseFormat: ResponseFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  responses?: TConfig["responses"];
  responseHeaders?: TConfig["responseHeaders"];
};

/**
 * Minimal response surface used by ApiClient — avoids depending on the DOM `Response`
 * global (helpful for Node without DOM lib). Structural typing accepts fetch Response.
 */
export interface FetcherResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: {
    get(name: string): string | null;
    getSetCookie?: () => string[];
  };
  /** Present on fetch Response; used for SSE / streaming bodies. */
  body?: ReadableStream<Uint8Array> | null;
  json(): Promise<unknown>;
  text(): Promise<string>;
  arrayBuffer(): Promise<ArrayBuffer>;
  clone(): FetcherResponse;
}

export interface Fetcher {
  decodePathParams?: (path: string, pathParams: unknown) => string;
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined;
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void;
  //
  fetch: (input: {
    method: Method;
    url: URL;
    urlSearchParams?: URLSearchParams | undefined;
    parameters?: EndpointParameters | undefined;
    path: string;
    /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
    requestFormat: RequestFormat;
    overrides?: RequestInit;
    throwOnStatusError?: boolean;
  }) => Promise<FetcherResponse>;
  parseResponseData?: (response: FetcherResponse) => Promise<unknown>;
}

export const successStatusCodes = [
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308,
] as const;
export type SuccessStatusCode = (typeof successStatusCodes)[number];

export const errorStatusCodes = [
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424,
  425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
] as const;
export type ErrorStatusCode = (typeof errorStatusCodes)[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown> extends Omit<
  Headers,
  "append" | "delete" | "get" | "getSetCookie" | "has" | "set" | "forEach"
> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
  ) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[];
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void;
  forEach: (
    callbackfn: (
      value: TypedHeaderValues[keyof TypedHeaderValues] | (string & {}),
      key: Extract<keyof TypedHeaderValues, string> | (string & {}),
      parent: TypedHeaders<TypedHeaderValues>,
    ) => void,
    thisArg?: any,
  ) => void;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<
  FetcherResponse,
  "ok" | "status" | "json" | "headers"
> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<
  FetcherResponse,
  "ok" | "status" | "json" | "headers"
> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: K extends string
    ? K extends `${infer TStatusCode extends number}`
      ? TStatusCode extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : never
    : K extends number
      ? K extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
      : never;
}[keyof TAllResponses];

type InferSchemaValue<T> = T extends { Type: infer O }
  ? O
  : T extends object
    ? { [K in keyof T]: InferSchemaValue<T[K]> }
    : T;
type InferSchemaInput<T> = T extends { Encoded: infer I }
  ? I
  : T extends object
    ? { [K in keyof T as undefined extends InferSchemaInput<T[K]> ? never : K]: InferSchemaInput<T[K]> } & {
        [K in keyof T as undefined extends InferSchemaInput<T[K]> ? K : never]?: Exclude<
          InferSchemaInput<T[K]>,
          undefined
        >;
      }
    : T;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<
        InferSchemaValue<TResponses>,
        TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never
      >
    : never
  : never;

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<
  SafeApiResponse<TEndpoint>,
  { status: TStatusCode }
>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ValidateSide = "none" | "input" | "output" | "both";
export type OnValidate = (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
}) => unknown | Promise<unknown>;

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>;
  status: number;
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`);
    this.name = "TypedStatusError";
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>

import { Effect } from "effect";
import type { ParseError } from "effect/ParseResult";

// <HttpClientError>
export class HttpClientError extends Error {
  readonly _tag = "HttpClientError";
  constructor(
    message: string,
    readonly cause?: unknown,
  ) {
    super(message);
    this.name = "HttpClientError";
  }
}
// </HttpClientError>

// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return Schema.decodeUnknownSync(schema as Schema.Schema<unknown, unknown, never>)(value);
};

const runValidate = async (ctx: {
  side: "input" | "output";
  method: string;
  path: string;
  schema: unknown;
  value: unknown;
  onValidate?: OnValidate;
}): Promise<unknown> => {
  if (ctx.onValidate) return ctx.onValidate(ctx);
  return defaultParse(ctx.schema, ctx.value);
};
// </ValidateHelpers>

export type EffectFetcher = {
  decodePathParams?: (path: string, pathParams: unknown) => string;
  encodeSearchParams?: (searchParams: unknown) => URLSearchParams | undefined;
  encodeCookies?: (cookies: unknown, headers: Headers) => void;
  parseResponseData?: (response: FetcherResponse) => Promise<unknown>;
  fetch: (input: Parameters<Fetcher["fetch"]>[0]) => Effect.Effect<FetcherResponse, HttpClientError, never>;
};

const wrapPromiseFetcher = (fetcher: Fetcher): EffectFetcher => ({
  decodePathParams: fetcher.decodePathParams,
  encodeSearchParams: fetcher.encodeSearchParams,
  encodeCookies: fetcher.encodeCookies,
  parseResponseData: fetcher.parseResponseData,
  fetch: (input) =>
    Effect.tryPromise({
      try: () => fetcher.fetch(input),
      catch: (cause) => new HttpClientError("fetch failed", cause),
    }),
});

// <EffectApiClient>
export class EffectApiClient {
  baseUrl: string = "";
  successStatusCodes = successStatusCodes;
  errorStatusCodes = errorStatusCodes;
  validate: ValidateSide = "both";
  onValidate?: OnValidate;
  private effectFetcher: EffectFetcher;

  constructor(
    fetcher: Fetcher | EffectFetcher,
    options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
  ) {
    this.effectFetcher = options?.effectFetcher ? (fetcher as EffectFetcher) : wrapPromiseFetcher(fetcher as Fetcher);
    if (options?.validate !== undefined) this.validate = options.validate;
    if (options?.onValidate) this.onValidate = options.onValidate;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<any>
  ): Effect.Effect<
    Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"],
    TypedStatusError | HttpClientError | ParseError | Error,
    never
  > {
    const self = this;
    return Effect.gen(function* () {
      const requestParams = params[0];
      const validateSide: ValidateSide = requestParams?.validate ?? self.validate;
      const parametersToSend: EndpointParameters = {};
      if (requestParams?.body !== undefined) parametersToSend.body = requestParams.body;
      if (requestParams?.query !== undefined) parametersToSend.query = requestParams.query;
      if (requestParams?.header !== undefined) parametersToSend.header = requestParams.header;
      if (requestParams?.path !== undefined) parametersToSend.path = requestParams.path;
      if (requestParams?.cookie !== undefined) parametersToSend.cookie = requestParams.cookie;

      type RuntimeEndpoint = {
        parameters?: Partial<Record<"body" | "query" | "header" | "path" | "cookie", unknown>>;
        responses?: Record<string, unknown>;
      };
      const endpointSchema = EndpointByMethod[method][path] as RuntimeEndpoint;
      if ((validateSide === "input" || validateSide === "both") && endpointSchema.parameters) {
        for (const key of ["body", "query", "header", "path", "cookie"] as const) {
          const schema = endpointSchema.parameters[key];
          const value = parametersToSend[key];
          if (schema !== undefined && value !== undefined) {
            if (self.onValidate) {
              parametersToSend[key] = yield* Effect.tryPromise({
                try: () =>
                  runValidate({
                    side: "input",
                    method: String(method),
                    path: String(path),
                    schema: schema,
                    value: value,
                    onValidate: self.onValidate,
                  }),
                catch: (e) => (e instanceof Error ? e : new Error(String(e))),
              });
            } else {
              parametersToSend[key] = yield* Schema.decodeUnknown(schema as Schema.Schema<unknown, unknown, never>)(
                value,
              );
            }
          }
        }
      }

      const decodePath =
        self.effectFetcher.decodePathParams ??
        ((url: string, p: unknown) => {
          const record = (p ?? {}) as Record<string, unknown>;
          return url
            .replace(/{(\w+)}/g, (_, key: string) => (record[key] != null ? String(record[key]) : `{${key}}`))
            .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) => (record[key] != null ? String(record[key]) : `:${key}`));
        });
      const encodeSearch =
        self.effectFetcher.encodeSearchParams ??
        ((queryParams: unknown) => {
          if (!queryParams || typeof queryParams !== "object") return undefined;
          const searchParams = new URLSearchParams();
          Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
            if (value != null) {
              if (Array.isArray(value)) value.forEach((val) => val != null && searchParams.append(key, String(val)));
              else searchParams.append(key, String(value));
            }
          });
          return searchParams;
        });
      const encodeCookies =
        self.effectFetcher.encodeCookies ??
        ((cookies: unknown, headers: Headers) => {
          if (!cookies || typeof cookies !== "object") return;
          const parts = Object.entries(cookies as Record<string, unknown>)
            .filter(([, value]) => value != null)
            .map(([key, value]) => `${key}=${String(value)}`);
          if (!parts.length) return;
          const existing = headers.get("cookie");
          headers.set("cookie", existing ? `${existing}; ${parts.join("; ")}` : parts.join("; "));
        });
      const parseData =
        self.effectFetcher.parseResponseData ??
        (async (response: FetcherResponse) => {
          const contentType = response.headers.get("content-type") ?? "";
          if (contentType.includes("text/event-stream")) {
            return response.body ?? null;
          }
          if (contentType.includes("json") || contentType === "*/*") {
            try {
              return await response.json();
            } catch {
              return undefined;
            }
          }
          if (contentType.startsWith("text/")) return response.text();
          return undefined;
        });

      const resolvedPath = decodePath(self.baseUrl + (path as string), parametersToSend.path ?? {});
      const url = new URL(resolvedPath);
      const urlSearchParams = encodeSearch(parametersToSend.query);

      let overrides = requestParams?.overrides as RequestInit | undefined;
      if (parametersToSend.cookie) {
        const headers = new Headers(overrides?.headers);
        encodeCookies(parametersToSend.cookie, headers);
        overrides = { ...overrides, headers };
      }

      const response = yield* self.effectFetcher.fetch({
        method: method as Method,
        path: path as string,
        url,
        urlSearchParams,
        parameters: Object.keys(parametersToSend).length ? parametersToSend : undefined,
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        overrides,
      });

      const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
      let data =
        responseFormat === "sse"
          ? (response.body ?? null)
          : yield* Effect.tryPromise({
              try: () => parseData(response),
              catch: (cause) => new HttpClientError("parse failed", cause),
            });

      if (
        responseFormat !== "sse" &&
        (validateSide === "output" || validateSide === "both") &&
        response.ok &&
        endpointSchema?.responses
      ) {
        const responseSchema = endpointSchema.responses[String(response.status)] ?? endpointSchema.responses["default"];
        if (responseSchema) {
          if (self.onValidate) {
            data = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "output",
                  method: String(method),
                  path: String(path),
                  schema: responseSchema,
                  value: data,
                  onValidate: self.onValidate,
                }),
              catch: (e) => (e instanceof Error ? e : new Error(String(e))),
            });
          } else {
            data = yield* Schema.decodeUnknown(responseSchema as Schema.Schema<unknown, unknown, never>)(data);
          }
        }
      }

      if ((errorStatusCodes as readonly number[]).includes(response.status)) {
        const typedResponse = Object.assign(response, { data, json: () => Promise.resolve(data) });
        return yield* Effect.fail(
          new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>),
        );
      }

      return data as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>["data"];
    });
  }

  get<Path extends keyof GetEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request<"get", Path, GetEndpoints[Path]>("get", path, ...params);
  }
  post<Path extends keyof PostEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request<"post", Path, PostEndpoints[Path]>("post", path, ...params);
  }
  delete<Path extends keyof DeleteEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request<"delete", Path, DeleteEndpoints[Path]>("delete", path, ...params);
  }
  put<Path extends keyof PutEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request<"put", Path, PutEndpoints[Path]>("put", path, ...params);
  }
  head<Path extends keyof HeadEndpoints>(path: Path, ...params: MaybeOptionalArg<any>) {
    return this.request<"head", Path, HeadEndpoints[Path]>("head", path, ...params);
  }
}

export function createEffectApiClient(
  fetcher: Fetcher | EffectFetcher,
  baseUrl?: string,
  options?: { validate?: ValidateSide; onValidate?: OnValidate; effectFetcher?: boolean },
) {
  return new EffectApiClient(fetcher, options).setBaseUrl(baseUrl ?? "");
}
// </EffectApiClient>
