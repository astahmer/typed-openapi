
  import { Schema as S } from "@effect/schema";

// <DefaultSchemas>
const Boolean_default_false_prop = S.optionalWith(S.Boolean, { default: () => false });
const Int_default_0_prop = S.optionalWith(S.Int, { default: () => 0 });
const Boolean_default_true_prop = S.optionalWith(S.Boolean, { default: () => true });
const NullOr_default_false_prop = S.optionalWith(S.NullOr(S.Boolean), { default: () => false });
const Union_default_single_prop = S.optionalWith(S.Union(S.Literal("single"), S.Literal("multi")), { default: () => "single" });
const Union_default_none_prop = S.optionalWith(S.Union(S.Literal("none"), S.Literal("readonly"), S.Literal("onewriter"), S.Literal("all")), { default: () => "none" });
const Union_default_active_prop = S.optionalWith(S.Union(S.Literal("active"), S.Literal("pause"), S.Literal("drain")), { default: () => "active" });
const Int_default_neg_1_prop = S.optionalWith(S.Int, { default: () => -1 });
const Union_default_local_prop = S.optionalWith(S.Union(S.Literal("local"), S.Literal("global")), { default: () => "local" });
const String_default_local_prop = S.optionalWith(S.String, { default: () => "local" });
const String_default_default_prop = S.optionalWith(S.String, { default: () => "default" });
const Union_default_ingress_prop = S.optionalWith(S.Union(S.Literal("ingress"), S.Literal("host")), { default: () => "ingress" });
const Union_default_vip_prop = S.optionalWith(S.Union(S.Literal("vip"), S.Literal("dnsrr")), { default: () => "vip" });
const Int_default_1_prop = S.optionalWith(S.Int, { default: () => 1 });
const Union_default_value = S.transform(S.UndefinedOr(S.Union(S.Literal(""), S.Literal("inactive"), S.Literal("pending"), S.Literal("active"), S.Literal("error"), S.Literal("locked"))), S.Union(S.Literal(""), S.Literal("inactive"), S.Literal("pending"), S.Literal("active"), S.Literal("error"), S.Literal("locked")), { strict: true, decode: (i) => (i === undefined ? "" : i), encode: (a) => a });
const String_default_value_prop = S.optionalWith(S.String, { default: () => "" });
const Union_default_cgroupfs_prop = S.optionalWith(S.Union(S.Literal("cgroupfs"), S.Literal("systemd"), S.Literal("none")), { default: () => "cgroupfs" });
const Union_default_1_prop = S.optionalWith(S.Union(S.Literal("1"), S.Literal("2")), { default: () => "1" });
const String_default_https_index_docker_io_v1_prop = S.optionalWith(S.String, { default: () => "https://index.docker.io/v1/" });
const String_default_runc_prop = S.optionalWith(S.String, { default: () => "runc" });
const Union_default_default_prop = S.optionalWith(S.Union(S.Literal("default"), S.Literal("hyperv"), S.Literal("process")), { default: () => "default" });
const Union_default_false_prop = S.optionalWith(S.transform(S.Union(S.Boolean, S.String, S.Number), S.Boolean, { decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a }), { default: () => false });
const String_default_neg_ef_prop = S.optionalWith(S.String, { default: () => "-ef" });
const Schema_default_0_prop = S.optionalWith(S.NumberFromString.pipe(S.int()), { default: () => 0 });
const String_default_all_prop = S.optionalWith(S.String, { default: () => "all" });
const Union_default_true_prop = S.optionalWith(S.transform(S.Union(S.Boolean, S.String, S.Number), S.Boolean, { decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a }), { default: () => true });
const String_default_SIGKILL_prop = S.optionalWith(S.String, { default: () => "SIGKILL" });
const Union_default_notneg_running_prop = S.optionalWith(S.Union(S.Literal("not-running"), S.Literal("next-exit"), S.Literal("removed")), { default: () => "not-running" });
const String_default_Dockerfile_prop = S.optionalWith(S.String, { default: () => "Dockerfile" });
const Union_default_inactive_prop = S.optionalWith(S.Union(S.Literal("inactive"), S.Literal("pending"), S.Literal("error"), S.Literal("locked"), S.Literal("active/worker"), S.Literal("active/manager")), { default: () => "inactive" });
const String_default_noneg_cache_noneg_store_mustneg_revalida_prop = S.optionalWith(S.String, { default: () => "no-cache, no-store, must-revalidate" });
const String_default_noneg_cache_prop = S.optionalWith(S.String, { default: () => "no-cache" });
const String_default_2_prop = S.optionalWith(S.String, { default: () => "2" });
const String_default_bridge_prop = S.optionalWith(S.String, { default: () => "bridge" });
const Union_default_spec_prop = S.optionalWith(S.Union(S.Literal("spec"), S.Literal("previous-spec")), { default: () => "spec" });

// </DefaultSchemas>

// <Schemas>
export const Port = S.extend(S.Struct({ IP: S.optional(S.String), PrivatePort: S.Int, PublicPort: S.optional(S.Int), Type: S.Union(S.Literal("tcp"), S.Literal("udp"), S.Literal("sctp")) }), S.Record({ key: S.String, value: S.Unknown }));
export type Port = S.Schema.Type<typeof Port>;

export const MountPoint = S.extend(S.Struct({ Type: S.optional(S.Union(S.Literal("bind"), S.Literal("volume"), S.Literal("tmpfs"), S.Literal("npipe"), S.Literal("cluster"))), Name: S.optional(S.String), Source: S.optional(S.String), Destination: S.optional(S.String), Driver: S.optional(S.String), Mode: S.optional(S.String), RW: S.optional(S.Boolean), Propagation: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type MountPoint = S.Schema.Type<typeof MountPoint>;

export const DeviceMapping = S.extend(S.Struct({ PathOnHost: S.optional(S.String), PathInContainer: S.optional(S.String), CgroupPermissions: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type DeviceMapping = S.Schema.Type<typeof DeviceMapping>;

export const DeviceRequest = S.extend(S.Struct({ Driver: S.optional(S.String), Count: S.optional(S.Int), DeviceIDs: S.optional(S.Array(S.String)), Capabilities: S.optional(S.Array(S.Array(S.String))), Options: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }));
export type DeviceRequest = S.Schema.Type<typeof DeviceRequest>;

export const ThrottleDevice = S.extend(S.Struct({ Path: S.optional(S.String), Rate: S.optional(S.Int.pipe(S.greaterThanOrEqualTo(0))) }), S.Record({ key: S.String, value: S.Unknown }));
export type ThrottleDevice = S.Schema.Type<typeof ThrottleDevice>;

export const Mount = S.extend(S.Struct({ Target: S.optional(S.String), Source: S.optional(S.String), Type: S.optional(S.Union(S.Literal("bind"), S.Literal("volume"), S.Literal("tmpfs"), S.Literal("npipe"), S.Literal("cluster"))), ReadOnly: S.optional(S.Boolean), Consistency: S.optional(S.String), BindOptions: S.optional(S.extend(S.Struct({ Propagation: S.optional(S.Union(S.Literal("private"), S.Literal("rprivate"), S.Literal("shared"), S.Literal("rshared"), S.Literal("slave"), S.Literal("rslave"))), NonRecursive: Boolean_default_false_prop, CreateMountpoint: Boolean_default_false_prop }), S.Record({ key: S.String, value: S.Unknown }))), VolumeOptions: S.optional(S.extend(S.Struct({ NoCopy: Boolean_default_false_prop, Labels: S.optional(S.Record({ key: S.String, value: S.String })), DriverConfig: S.optional(S.extend(S.Struct({ Name: S.optional(S.String), Options: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }))), TmpfsOptions: S.optional(S.extend(S.Struct({ SizeBytes: S.optional(S.Int), Mode: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }));
export type Mount = S.Schema.Type<typeof Mount>;

export const RestartPolicy = S.extend(S.Struct({ Name: S.optional(S.Union(S.Literal(""), S.Literal("no"), S.Literal("always"), S.Literal("unless-stopped"), S.Literal("on-failure"))), MaximumRetryCount: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type RestartPolicy = S.Schema.Type<typeof RestartPolicy>;

export const Resources = S.extend(S.Struct({ CpuShares: S.optional(S.Int), Memory: Int_default_0_prop, CgroupParent: S.optional(S.String), BlkioWeight: S.optional(S.Int.pipe(S.greaterThanOrEqualTo(0), S.lessThanOrEqualTo(1000))), BlkioWeightDevice: S.optional(S.Array(S.extend(S.Struct({ Path: S.optional(S.String), Weight: S.optional(S.Int.pipe(S.greaterThanOrEqualTo(0))) }), S.Record({ key: S.String, value: S.Unknown })))), BlkioDeviceReadBps: S.optional(S.Array(ThrottleDevice)), BlkioDeviceWriteBps: S.optional(S.Array(ThrottleDevice)), BlkioDeviceReadIOps: S.optional(S.Array(ThrottleDevice)), BlkioDeviceWriteIOps: S.optional(S.Array(ThrottleDevice)), CpuPeriod: S.optional(S.Int), CpuQuota: S.optional(S.Int), CpuRealtimePeriod: S.optional(S.Int), CpuRealtimeRuntime: S.optional(S.Int), CpusetCpus: S.optional(S.String), CpusetMems: S.optional(S.String), Devices: S.optional(S.Array(DeviceMapping)), DeviceCgroupRules: S.optional(S.Array(S.String)), DeviceRequests: S.optional(S.Array(DeviceRequest)), KernelMemoryTCP: S.optional(S.Int), MemoryReservation: S.optional(S.Int), MemorySwap: S.optional(S.Int), MemorySwappiness: S.optional(S.Int.pipe(S.greaterThanOrEqualTo(0), S.lessThanOrEqualTo(100))), NanoCpus: S.optional(S.Int), OomKillDisable: S.optional(S.Boolean), Init: S.optional(S.NullOr(S.Boolean)), PidsLimit: S.optional(S.NullOr(S.Int)), Ulimits: S.optional(S.Array(S.extend(S.Struct({ Name: S.optional(S.String), Soft: S.optional(S.Int), Hard: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })))), CpuCount: S.optional(S.Int), CpuPercent: S.optional(S.Int), IOMaximumIOps: S.optional(S.Int), IOMaximumBandwidth: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type Resources = S.Schema.Type<typeof Resources>;

export const Limit = S.extend(S.Struct({ NanoCPUs: S.optional(S.Int), MemoryBytes: S.optional(S.Int), Pids: Int_default_0_prop }), S.Record({ key: S.String, value: S.Unknown }));
export type Limit = S.Schema.Type<typeof Limit>;

export const GenericResources = S.Array(S.extend(S.Struct({ NamedResourceSpec: S.optional(S.extend(S.Struct({ Kind: S.optional(S.String), Value: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))), DiscreteResourceSpec: S.optional(S.extend(S.Struct({ Kind: S.optional(S.String), Value: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown })));
export type GenericResources = S.Schema.Type<typeof GenericResources>;

export const ResourceObject = S.extend(S.Struct({ NanoCPUs: S.optional(S.Int), MemoryBytes: S.optional(S.Int), GenericResources: S.optional(GenericResources) }), S.Record({ key: S.String, value: S.Unknown }));
export type ResourceObject = S.Schema.Type<typeof ResourceObject>;

export const HealthConfig = S.extend(S.Struct({ Test: S.optional(S.Array(S.String)), Interval: S.optional(S.Int), Timeout: S.optional(S.Int), Retries: S.optional(S.Int), StartPeriod: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type HealthConfig = S.Schema.Type<typeof HealthConfig>;

export const HealthcheckResult = S.NullOr(S.extend(S.Struct({ Start: S.optional(S.String), End: S.optional(S.String), ExitCode: S.optional(S.Int), Output: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })));
export type HealthcheckResult = S.Schema.Type<typeof HealthcheckResult>;

export const Health = S.NullOr(S.extend(S.Struct({ Status: S.optional(S.Union(S.Literal("none"), S.Literal("starting"), S.Literal("healthy"), S.Literal("unhealthy"))), FailingStreak: S.optional(S.Int), Log: S.optional(S.Array(HealthcheckResult)) }), S.Record({ key: S.String, value: S.Unknown })));
export type Health = S.Schema.Type<typeof Health>;

export const PortBinding = S.extend(S.Struct({ HostIp: S.optional(S.String), HostPort: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type PortBinding = S.Schema.Type<typeof PortBinding>;

export const PortMap = S.Record({ key: S.String, value: S.NullOr(S.Array(PortBinding)) });
export type PortMap = S.Schema.Type<typeof PortMap>;

export const HostConfig = S.extend(Resources, S.extend(S.Struct({ Binds: S.optional(S.Array(S.String)), ContainerIDFile: S.optional(S.String), LogConfig: S.optional(S.extend(S.Struct({ Type: S.optional(S.Union(S.Literal("json-file"), S.Literal("syslog"), S.Literal("journald"), S.Literal("gelf"), S.Literal("fluentd"), S.Literal("awslogs"), S.Literal("splunk"), S.Literal("etwlogs"), S.Literal("none"))), Config: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }))), NetworkMode: S.optional(S.String), PortBindings: S.optional(PortMap), RestartPolicy: S.optional(RestartPolicy), AutoRemove: S.optional(S.Boolean), VolumeDriver: S.optional(S.String), VolumesFrom: S.optional(S.Array(S.String)), Mounts: S.optional(S.Array(Mount)), ConsoleSize: S.optional(S.NullOr(S.Array(S.Int.pipe(S.greaterThanOrEqualTo(0))).pipe(S.minItems(2), S.maxItems(2)))), Annotations: S.optional(S.Record({ key: S.String, value: S.String })), CapAdd: S.optional(S.Array(S.String)), CapDrop: S.optional(S.Array(S.String)), CgroupnsMode: S.optional(S.Union(S.Literal("private"), S.Literal("host"))), Dns: S.optional(S.Array(S.String)), DnsOptions: S.optional(S.Array(S.String)), DnsSearch: S.optional(S.Array(S.String)), ExtraHosts: S.optional(S.Array(S.String)), GroupAdd: S.optional(S.Array(S.String)), IpcMode: S.optional(S.String), Cgroup: S.optional(S.String), Links: S.optional(S.Array(S.String)), OomScoreAdj: S.optional(S.Int), PidMode: S.optional(S.String), Privileged: S.optional(S.Boolean), PublishAllPorts: S.optional(S.Boolean), ReadonlyRootfs: S.optional(S.Boolean), SecurityOpt: S.optional(S.Array(S.String)), StorageOpt: S.optional(S.Record({ key: S.String, value: S.String })), Tmpfs: S.optional(S.Record({ key: S.String, value: S.String })), UTSMode: S.optional(S.String), UsernsMode: S.optional(S.String), ShmSize: S.optional(S.Int.pipe(S.greaterThanOrEqualTo(0))), Sysctls: S.optional(S.Record({ key: S.String, value: S.String })), Runtime: S.optional(S.String), Isolation: S.optional(S.Union(S.Literal("default"), S.Literal("process"), S.Literal("hyperv"))), MaskedPaths: S.optional(S.Array(S.String)), ReadonlyPaths: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown })));
export type HostConfig = S.Schema.Type<typeof HostConfig>;

export const ContainerConfig = S.extend(S.Struct({ Hostname: S.optional(S.String), Domainname: S.optional(S.String), User: S.optional(S.String), AttachStdin: Boolean_default_false_prop, AttachStdout: Boolean_default_true_prop, AttachStderr: Boolean_default_true_prop, ExposedPorts: S.optional(S.NullOr(S.Record({ key: S.String, value: S.extend(S.Struct({  }), S.Record({ key: S.String, value: S.Unknown })) }))), Tty: Boolean_default_false_prop, OpenStdin: Boolean_default_false_prop, StdinOnce: Boolean_default_false_prop, Env: S.optional(S.Array(S.String)), Cmd: S.optional(S.Array(S.String)), Healthcheck: S.optional(HealthConfig), ArgsEscaped: NullOr_default_false_prop, Image: S.optional(S.String), Volumes: S.optional(S.Record({ key: S.String, value: S.extend(S.Struct({  }), S.Record({ key: S.String, value: S.Unknown })) })), WorkingDir: S.optional(S.String), Entrypoint: S.optional(S.Array(S.String)), NetworkDisabled: S.optional(S.NullOr(S.Boolean)), MacAddress: S.optional(S.NullOr(S.String)), OnBuild: S.optional(S.NullOr(S.Array(S.String))), Labels: S.optional(S.Record({ key: S.String, value: S.String })), StopSignal: S.optional(S.NullOr(S.String)), StopTimeout: S.optional(S.NullOr(S.Int)), Shell: S.optional(S.NullOr(S.Array(S.String))) }), S.Record({ key: S.String, value: S.Unknown }));
export type ContainerConfig = S.Schema.Type<typeof ContainerConfig>;

export const EndpointIPAMConfig = S.NullOr(S.extend(S.Struct({ IPv4Address: S.optional(S.String), IPv6Address: S.optional(S.String), LinkLocalIPs: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown })));
export type EndpointIPAMConfig = S.Schema.Type<typeof EndpointIPAMConfig>;

export const EndpointSettings = S.extend(S.Struct({ IPAMConfig: S.optional(EndpointIPAMConfig), Links: S.optional(S.Array(S.String)), Aliases: S.optional(S.Array(S.String)), NetworkID: S.optional(S.String), EndpointID: S.optional(S.String), Gateway: S.optional(S.String), IPAddress: S.optional(S.String), IPPrefixLen: S.optional(S.Int), IPv6Gateway: S.optional(S.String), GlobalIPv6Address: S.optional(S.String), GlobalIPv6PrefixLen: S.optional(S.Int), MacAddress: S.optional(S.String), DriverOpts: S.optional(S.NullOr(S.Record({ key: S.String, value: S.String }))) }), S.Record({ key: S.String, value: S.Unknown }));
export type EndpointSettings = S.Schema.Type<typeof EndpointSettings>;

export const NetworkingConfig = S.extend(S.Struct({ EndpointsConfig: S.optional(S.Record({ key: S.String, value: EndpointSettings })) }), S.Record({ key: S.String, value: S.Unknown }));
export type NetworkingConfig = S.Schema.Type<typeof NetworkingConfig>;

export const Address = S.extend(S.Struct({ Addr: S.optional(S.String), PrefixLen: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type Address = S.Schema.Type<typeof Address>;

export const NetworkSettings = S.extend(S.Struct({ Bridge: S.optional(S.String), SandboxID: S.optional(S.String), HairpinMode: S.optional(S.Boolean), LinkLocalIPv6Address: S.optional(S.String), LinkLocalIPv6PrefixLen: S.optional(S.Int), Ports: S.optional(PortMap), SandboxKey: S.optional(S.String), SecondaryIPAddresses: S.optional(S.NullOr(S.Array(Address))), SecondaryIPv6Addresses: S.optional(S.NullOr(S.Array(Address))), EndpointID: S.optional(S.String), Gateway: S.optional(S.String), GlobalIPv6Address: S.optional(S.String), GlobalIPv6PrefixLen: S.optional(S.Int), IPAddress: S.optional(S.String), IPPrefixLen: S.optional(S.Int), IPv6Gateway: S.optional(S.String), MacAddress: S.optional(S.String), Networks: S.optional(S.Record({ key: S.String, value: EndpointSettings })) }), S.Record({ key: S.String, value: S.Unknown }));
export type NetworkSettings = S.Schema.Type<typeof NetworkSettings>;

export const GraphDriverData = S.extend(S.Struct({ Name: S.String, Data: S.Record({ key: S.String, value: S.String }) }), S.Record({ key: S.String, value: S.Unknown }));
export type GraphDriverData = S.Schema.Type<typeof GraphDriverData>;

export const ChangeType = S.Union(S.Literal(0), S.Literal(1), S.Literal(2));
export type ChangeType = S.Schema.Type<typeof ChangeType>;

export const FilesystemChange = S.extend(S.Struct({ Path: S.String, Kind: ChangeType }), S.Record({ key: S.String, value: S.Unknown }));
export type FilesystemChange = S.Schema.Type<typeof FilesystemChange>;

export const ImageInspect = S.extend(S.Struct({ Id: S.optional(S.String), RepoTags: S.optional(S.Array(S.String)), RepoDigests: S.optional(S.Array(S.String)), Parent: S.optional(S.String), Comment: S.optional(S.String), Created: S.optional(S.String), Container: S.optional(S.String), ContainerConfig: S.optional(ContainerConfig), DockerVersion: S.optional(S.String), Author: S.optional(S.String), Config: S.optional(ContainerConfig), Architecture: S.optional(S.String), Variant: S.optional(S.NullOr(S.String)), Os: S.optional(S.String), OsVersion: S.optional(S.NullOr(S.String)), Size: S.optional(S.Int), VirtualSize: S.optional(S.Int), GraphDriver: S.optional(GraphDriverData), RootFS: S.optional(S.extend(S.Struct({ Type: S.String, Layers: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }))), Metadata: S.optional(S.extend(S.Struct({ LastTagTime: S.optional(S.NullOr(S.String)) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }));
export type ImageInspect = S.Schema.Type<typeof ImageInspect>;

export const ImageSummary = S.extend(S.Struct({ Id: S.String, ParentId: S.String, RepoTags: S.Array(S.String), RepoDigests: S.Array(S.String), Created: S.Int, Size: S.Int, SharedSize: S.Int, VirtualSize: S.optional(S.Int), Labels: S.Record({ key: S.String, value: S.String }), Containers: S.Int }), S.Record({ key: S.String, value: S.Unknown }));
export type ImageSummary = S.Schema.Type<typeof ImageSummary>;

export const AuthConfig = S.extend(S.Struct({ username: S.optional(S.String), password: S.optional(S.String), email: S.optional(S.String), serveraddress: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type AuthConfig = S.Schema.Type<typeof AuthConfig>;

export const ProcessConfig = S.extend(S.Struct({ privileged: S.optional(S.Boolean), user: S.optional(S.String), tty: S.optional(S.Boolean), entrypoint: S.optional(S.String), arguments: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }));
export type ProcessConfig = S.Schema.Type<typeof ProcessConfig>;

export const ObjectVersion = S.extend(S.Struct({ Index: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type ObjectVersion = S.Schema.Type<typeof ObjectVersion>;

export const Topology = S.Record({ key: S.String, value: S.String });
export type Topology = S.Schema.Type<typeof Topology>;

export const ClusterVolumeSpec = S.extend(S.Struct({ Group: S.optional(S.String), AccessMode: S.optional(S.extend(S.Struct({ Scope: Union_default_single_prop, Sharing: Union_default_none_prop, MountVolume: S.optional(S.extend(S.Struct({  }), S.Record({ key: S.String, value: S.Unknown }))), Secrets: S.optional(S.Array(S.extend(S.Struct({ Key: S.optional(S.String), Secret: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })))), AccessibilityRequirements: S.optional(S.extend(S.Struct({ Requisite: S.optional(S.Array(Topology)), Preferred: S.optional(S.Array(Topology)) }), S.Record({ key: S.String, value: S.Unknown }))), CapacityRange: S.optional(S.extend(S.Struct({ RequiredBytes: S.optional(S.Int), LimitBytes: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), Availability: Union_default_active_prop }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }));
export type ClusterVolumeSpec = S.Schema.Type<typeof ClusterVolumeSpec>;

export const ClusterVolume = S.extend(S.Struct({ ID: S.optional(S.String), Version: S.optional(ObjectVersion), CreatedAt: S.optional(S.String), UpdatedAt: S.optional(S.String), Spec: S.optional(ClusterVolumeSpec), Info: S.optional(S.extend(S.Struct({ CapacityBytes: S.optional(S.Int), VolumeContext: S.optional(S.Record({ key: S.String, value: S.String })), VolumeID: S.optional(S.String), AccessibleTopology: S.optional(S.Array(Topology)) }), S.Record({ key: S.String, value: S.Unknown }))), PublishStatus: S.optional(S.Array(S.extend(S.Struct({ NodeID: S.optional(S.String), State: S.optional(S.Union(S.Literal("pending-publish"), S.Literal("published"), S.Literal("pending-node-unpublish"), S.Literal("pending-controller-unpublish"))), PublishContext: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown })))) }), S.Record({ key: S.String, value: S.Unknown }));
export type ClusterVolume = S.Schema.Type<typeof ClusterVolume>;

export const Volume = S.extend(S.Struct({ Name: S.String, Driver: S.String, Mountpoint: S.String, CreatedAt: S.optional(S.String), Status: S.optional(S.Record({ key: S.String, value: S.extend(S.Struct({  }), S.Record({ key: S.String, value: S.Unknown })) })), Labels: S.Record({ key: S.String, value: S.String }), Scope: Union_default_local_prop, ClusterVolume: S.optional(ClusterVolume), Options: S.Record({ key: S.String, value: S.String }), UsageData: S.optional(S.NullOr(S.extend(S.Struct({ Size: Int_default_neg_1_prop, RefCount: Int_default_neg_1_prop }), S.Record({ key: S.String, value: S.Unknown })))) }), S.Record({ key: S.String, value: S.Unknown }));
export type Volume = S.Schema.Type<typeof Volume>;

export const VolumeCreateOptions = S.extend(S.Struct({ Name: S.optional(S.String), Driver: String_default_local_prop, DriverOpts: S.optional(S.Record({ key: S.String, value: S.String })), Labels: S.optional(S.Record({ key: S.String, value: S.String })), ClusterVolumeSpec: S.optional(ClusterVolumeSpec) }), S.Record({ key: S.String, value: S.Unknown }));
export type VolumeCreateOptions = S.Schema.Type<typeof VolumeCreateOptions>;

export const VolumeListResponse = S.extend(S.Struct({ Volumes: S.optional(S.Array(Volume)), Warnings: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }));
export type VolumeListResponse = S.Schema.Type<typeof VolumeListResponse>;

export const IPAMConfig = S.extend(S.Struct({ Subnet: S.optional(S.String), IPRange: S.optional(S.String), Gateway: S.optional(S.String), AuxiliaryAddresses: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }));
export type IPAMConfig = S.Schema.Type<typeof IPAMConfig>;

export const IPAM = S.extend(S.Struct({ Driver: String_default_default_prop, Config: S.optional(S.Array(IPAMConfig)), Options: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }));
export type IPAM = S.Schema.Type<typeof IPAM>;

export const NetworkContainer = S.extend(S.Struct({ Name: S.optional(S.String), EndpointID: S.optional(S.String), MacAddress: S.optional(S.String), IPv4Address: S.optional(S.String), IPv6Address: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type NetworkContainer = S.Schema.Type<typeof NetworkContainer>;

export const Network = S.extend(S.Struct({ Name: S.optional(S.String), Id: S.optional(S.String), Created: S.optional(S.String), Scope: S.optional(S.String), Driver: S.optional(S.String), EnableIPv6: S.optional(S.Boolean), IPAM: S.optional(IPAM), Internal: S.optional(S.Boolean), Attachable: S.optional(S.Boolean), Ingress: S.optional(S.Boolean), Containers: S.optional(S.Record({ key: S.String, value: NetworkContainer })), Options: S.optional(S.Record({ key: S.String, value: S.String })), Labels: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }));
export type Network = S.Schema.Type<typeof Network>;

export const ErrorDetail = S.extend(S.Struct({ code: S.optional(S.Int), message: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type ErrorDetail = S.Schema.Type<typeof ErrorDetail>;

export const ProgressDetail = S.extend(S.Struct({ current: S.optional(S.Int), total: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type ProgressDetail = S.Schema.Type<typeof ProgressDetail>;

export const ImageID = S.extend(S.Struct({ ID: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type ImageID = S.Schema.Type<typeof ImageID>;

export const BuildInfo = S.extend(S.Struct({ id: S.optional(S.String), stream: S.optional(S.String), error: S.optional(S.String), errorDetail: S.optional(ErrorDetail), status: S.optional(S.String), progress: S.optional(S.String), progressDetail: S.optional(ProgressDetail), aux: S.optional(ImageID) }), S.Record({ key: S.String, value: S.Unknown }));
export type BuildInfo = S.Schema.Type<typeof BuildInfo>;

export const BuildCache = S.extend(S.Struct({ ID: S.optional(S.String), Parent: S.optional(S.NullOr(S.String)), Parents: S.optional(S.NullOr(S.Array(S.String))), Type: S.optional(S.Union(S.Literal("internal"), S.Literal("frontend"), S.Literal("source.local"), S.Literal("source.git.checkout"), S.Literal("exec.cachemount"), S.Literal("regular"))), Description: S.optional(S.String), InUse: S.optional(S.Boolean), Shared: S.optional(S.Boolean), Size: S.optional(S.Int), CreatedAt: S.optional(S.String), LastUsedAt: S.optional(S.NullOr(S.String)), UsageCount: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type BuildCache = S.Schema.Type<typeof BuildCache>;

export const CreateImageInfo = S.extend(S.Struct({ id: S.optional(S.String), error: S.optional(S.String), errorDetail: S.optional(ErrorDetail), status: S.optional(S.String), progress: S.optional(S.String), progressDetail: S.optional(ProgressDetail) }), S.Record({ key: S.String, value: S.Unknown }));
export type CreateImageInfo = S.Schema.Type<typeof CreateImageInfo>;

export const PushImageInfo = S.extend(S.Struct({ error: S.optional(S.String), status: S.optional(S.String), progress: S.optional(S.String), progressDetail: S.optional(ProgressDetail) }), S.Record({ key: S.String, value: S.Unknown }));
export type PushImageInfo = S.Schema.Type<typeof PushImageInfo>;

export const ErrorResponse = S.extend(S.Struct({ message: S.String }), S.Record({ key: S.String, value: S.Unknown }));
export type ErrorResponse = S.Schema.Type<typeof ErrorResponse>;

export const IdResponse = S.extend(S.Struct({ Id: S.String }), S.Record({ key: S.String, value: S.Unknown }));
export type IdResponse = S.Schema.Type<typeof IdResponse>;

export const PluginMount = S.extend(S.Struct({ Name: S.String, Description: S.String, Settable: S.Array(S.String), Source: S.String, Destination: S.String, Type: S.String, Options: S.Array(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type PluginMount = S.Schema.Type<typeof PluginMount>;

export const PluginDevice = S.extend(S.Struct({ Name: S.String, Description: S.String, Settable: S.Array(S.String), Path: S.String }), S.Record({ key: S.String, value: S.Unknown }));
export type PluginDevice = S.Schema.Type<typeof PluginDevice>;

export const PluginEnv = S.extend(S.Struct({ Name: S.String, Description: S.String, Settable: S.Array(S.String), Value: S.String }), S.Record({ key: S.String, value: S.Unknown }));
export type PluginEnv = S.Schema.Type<typeof PluginEnv>;

export const PluginInterfaceType = S.extend(S.Struct({ Prefix: S.String, Capability: S.String, Version: S.String }), S.Record({ key: S.String, value: S.Unknown }));
export type PluginInterfaceType = S.Schema.Type<typeof PluginInterfaceType>;

export const PluginPrivilege = S.extend(S.Struct({ Name: S.optional(S.String), Description: S.optional(S.String), Value: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }));
export type PluginPrivilege = S.Schema.Type<typeof PluginPrivilege>;

export const Plugin = S.extend(S.Struct({ Id: S.optional(S.String), Name: S.String, Enabled: S.Boolean, Settings: S.extend(S.Struct({ Mounts: S.Array(PluginMount), Env: S.Array(S.String), Args: S.Array(S.String), Devices: S.Array(PluginDevice) }), S.Record({ key: S.String, value: S.Unknown })), PluginReference: S.optional(S.String), Config: S.extend(S.Struct({ DockerVersion: S.optional(S.String), Description: S.String, Documentation: S.String, Interface: S.extend(S.Struct({ Types: S.Array(PluginInterfaceType), Socket: S.String, ProtocolScheme: S.optional(S.Union(S.Literal(""), S.Literal("moby.plugins.http/v1"))) }), S.Record({ key: S.String, value: S.Unknown })), Entrypoint: S.Array(S.String), WorkDir: S.String, User: S.optional(S.extend(S.Struct({ UID: S.optional(S.Int), GID: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), Network: S.extend(S.Struct({ Type: S.String }), S.Record({ key: S.String, value: S.Unknown })), Linux: S.extend(S.Struct({ Capabilities: S.Array(S.String), AllowAllDevices: S.Boolean, Devices: S.Array(PluginDevice) }), S.Record({ key: S.String, value: S.Unknown })), PropagatedMount: S.String, IpcHost: S.Boolean, PidHost: S.Boolean, Mounts: S.Array(PluginMount), Env: S.Array(PluginEnv), Args: S.extend(S.Struct({ Name: S.String, Description: S.String, Settable: S.Array(S.String), Value: S.Array(S.String) }), S.Record({ key: S.String, value: S.Unknown })), rootfs: S.optional(S.extend(S.Struct({ type: S.optional(S.String), diff_ids: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown })) }), S.Record({ key: S.String, value: S.Unknown }));
export type Plugin = S.Schema.Type<typeof Plugin>;

export const NodeSpec = S.extend(S.Struct({ Name: S.optional(S.String), Labels: S.optional(S.Record({ key: S.String, value: S.String })), Role: S.optional(S.Union(S.Literal("worker"), S.Literal("manager"))), Availability: S.optional(S.Union(S.Literal("active"), S.Literal("pause"), S.Literal("drain"))) }), S.Record({ key: S.String, value: S.Unknown }));
export type NodeSpec = S.Schema.Type<typeof NodeSpec>;

export const Platform = S.extend(S.Struct({ Architecture: S.optional(S.String), OS: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type Platform = S.Schema.Type<typeof Platform>;

export const EngineDescription = S.extend(S.Struct({ EngineVersion: S.optional(S.String), Labels: S.optional(S.Record({ key: S.String, value: S.String })), Plugins: S.optional(S.Array(S.extend(S.Struct({ Type: S.optional(S.String), Name: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })))) }), S.Record({ key: S.String, value: S.Unknown }));
export type EngineDescription = S.Schema.Type<typeof EngineDescription>;

export const TLSInfo = S.extend(S.Struct({ TrustRoot: S.optional(S.String), CertIssuerSubject: S.optional(S.String), CertIssuerPublicKey: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type TLSInfo = S.Schema.Type<typeof TLSInfo>;

export const NodeDescription = S.extend(S.Struct({ Hostname: S.optional(S.String), Platform: S.optional(Platform), Resources: S.optional(ResourceObject), Engine: S.optional(EngineDescription), TLSInfo: S.optional(TLSInfo) }), S.Record({ key: S.String, value: S.Unknown }));
export type NodeDescription = S.Schema.Type<typeof NodeDescription>;

export const NodeState = S.Union(S.Literal("unknown"), S.Literal("down"), S.Literal("ready"), S.Literal("disconnected"));
export type NodeState = S.Schema.Type<typeof NodeState>;

export const NodeStatus = S.extend(S.Struct({ State: S.optional(NodeState), Message: S.optional(S.String), Addr: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type NodeStatus = S.Schema.Type<typeof NodeStatus>;

export const Reachability = S.Union(S.Literal("unknown"), S.Literal("unreachable"), S.Literal("reachable"));
export type Reachability = S.Schema.Type<typeof Reachability>;

export const ManagerStatus = S.NullOr(S.extend(S.Struct({ Leader: Boolean_default_false_prop, Reachability: S.optional(Reachability), Addr: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })));
export type ManagerStatus = S.Schema.Type<typeof ManagerStatus>;

export const Node = S.extend(S.Struct({ ID: S.optional(S.String), Version: S.optional(ObjectVersion), CreatedAt: S.optional(S.String), UpdatedAt: S.optional(S.String), Spec: S.optional(NodeSpec), Description: S.optional(NodeDescription), Status: S.optional(NodeStatus), ManagerStatus: S.optional(ManagerStatus) }), S.Record({ key: S.String, value: S.Unknown }));
export type Node = S.Schema.Type<typeof Node>;

export const SwarmSpec = S.extend(S.Struct({ Name: S.optional(S.String), Labels: S.optional(S.Record({ key: S.String, value: S.String })), Orchestration: S.optional(S.NullOr(S.extend(S.Struct({ TaskHistoryRetentionLimit: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })))), Raft: S.optional(S.extend(S.Struct({ SnapshotInterval: S.optional(S.Int), KeepOldSnapshots: S.optional(S.Int), LogEntriesForSlowFollowers: S.optional(S.Int), ElectionTick: S.optional(S.Int), HeartbeatTick: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), Dispatcher: S.optional(S.NullOr(S.extend(S.Struct({ HeartbeatPeriod: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })))), CAConfig: S.optional(S.NullOr(S.extend(S.Struct({ NodeCertExpiry: S.optional(S.Int), ExternalCAs: S.optional(S.Array(S.extend(S.Struct({ Protocol: S.optional(S.Literal("cfssl")), URL: S.optional(S.String), Options: S.optional(S.Record({ key: S.String, value: S.String })), CACert: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })))), SigningCACert: S.optional(S.String), SigningCAKey: S.optional(S.String), ForceRotate: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })))), EncryptionConfig: S.optional(S.extend(S.Struct({ AutoLockManagers: S.optional(S.Boolean) }), S.Record({ key: S.String, value: S.Unknown }))), TaskDefaults: S.optional(S.extend(S.Struct({ LogDriver: S.optional(S.extend(S.Struct({ Name: S.optional(S.String), Options: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }));
export type SwarmSpec = S.Schema.Type<typeof SwarmSpec>;

export const ClusterInfo = S.NullOr(S.extend(S.Struct({ ID: S.optional(S.String), Version: S.optional(ObjectVersion), CreatedAt: S.optional(S.String), UpdatedAt: S.optional(S.String), Spec: S.optional(SwarmSpec), TLSInfo: S.optional(TLSInfo), RootRotationInProgress: S.optional(S.Boolean), DataPathPort: S.optional(S.Int), DefaultAddrPool: S.optional(S.Array(S.String)), SubnetSize: S.optional(S.Int.pipe(S.lessThanOrEqualTo(29))) }), S.Record({ key: S.String, value: S.Unknown })));
export type ClusterInfo = S.Schema.Type<typeof ClusterInfo>;

export const JoinTokens = S.extend(S.Struct({ Worker: S.optional(S.String), Manager: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type JoinTokens = S.Schema.Type<typeof JoinTokens>;

export const Swarm = ClusterInfo.pipe(S.filter((value) => S.is(S.extend(S.Struct({ JoinTokens: S.optional(JoinTokens) }), S.Record({ key: S.String, value: S.Unknown })))(value)));
export type Swarm = S.Schema.Type<typeof Swarm>;

export const NetworkAttachmentConfig = S.extend(S.Struct({ Target: S.optional(S.String), Aliases: S.optional(S.Array(S.String)), DriverOpts: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }));
export type NetworkAttachmentConfig = S.Schema.Type<typeof NetworkAttachmentConfig>;

export const TaskSpec = S.extend(S.Struct({ PluginSpec: S.optional(S.extend(S.Struct({ Name: S.optional(S.String), Remote: S.optional(S.String), Disabled: S.optional(S.Boolean), PluginPrivilege: S.optional(S.Array(PluginPrivilege)) }), S.Record({ key: S.String, value: S.Unknown }))), ContainerSpec: S.optional(S.extend(S.Struct({ Image: S.optional(S.String), Labels: S.optional(S.Record({ key: S.String, value: S.String })), Command: S.optional(S.Array(S.String)), Args: S.optional(S.Array(S.String)), Hostname: S.optional(S.String), Env: S.optional(S.Array(S.String)), Dir: S.optional(S.String), User: S.optional(S.String), Groups: S.optional(S.Array(S.String)), Privileges: S.optional(S.extend(S.Struct({ CredentialSpec: S.optional(S.extend(S.Struct({ Config: S.optional(S.String), File: S.optional(S.String), Registry: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))), SELinuxContext: S.optional(S.extend(S.Struct({ Disable: S.optional(S.Boolean), User: S.optional(S.String), Role: S.optional(S.String), Type: S.optional(S.String), Level: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }))), TTY: S.optional(S.Boolean), OpenStdin: S.optional(S.Boolean), ReadOnly: S.optional(S.Boolean), Mounts: S.optional(S.Array(Mount)), StopSignal: S.optional(S.String), StopGracePeriod: S.optional(S.Int), HealthCheck: S.optional(HealthConfig), Hosts: S.optional(S.Array(S.String)), DNSConfig: S.optional(S.extend(S.Struct({ Nameservers: S.optional(S.Array(S.String)), Search: S.optional(S.Array(S.String)), Options: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }))), Secrets: S.optional(S.Array(S.extend(S.Struct({ File: S.optional(S.extend(S.Struct({ Name: S.optional(S.String), UID: S.optional(S.String), GID: S.optional(S.String), Mode: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), SecretID: S.optional(S.String), SecretName: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })))), Configs: S.optional(S.Array(S.extend(S.Struct({ File: S.optional(S.extend(S.Struct({ Name: S.optional(S.String), UID: S.optional(S.String), GID: S.optional(S.String), Mode: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), Runtime: S.optional(S.extend(S.Struct({  }), S.Record({ key: S.String, value: S.Unknown }))), ConfigID: S.optional(S.String), ConfigName: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })))), Isolation: S.optional(S.Union(S.Literal("default"), S.Literal("process"), S.Literal("hyperv"))), Init: S.optional(S.NullOr(S.Boolean)), Sysctls: S.optional(S.Record({ key: S.String, value: S.String })), CapabilityAdd: S.optional(S.Array(S.String)), CapabilityDrop: S.optional(S.Array(S.String)), Ulimits: S.optional(S.Array(S.extend(S.Struct({ Name: S.optional(S.String), Soft: S.optional(S.Int), Hard: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })))) }), S.Record({ key: S.String, value: S.Unknown }))), NetworkAttachmentSpec: S.optional(S.extend(S.Struct({ ContainerID: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))), Resources: S.optional(S.extend(S.Struct({ Limits: S.optional(Limit), Reservations: S.optional(ResourceObject) }), S.Record({ key: S.String, value: S.Unknown }))), RestartPolicy: S.optional(S.extend(S.Struct({ Condition: S.optional(S.Union(S.Literal("none"), S.Literal("on-failure"), S.Literal("any"))), Delay: S.optional(S.Int), MaxAttempts: Int_default_0_prop, Window: Int_default_0_prop }), S.Record({ key: S.String, value: S.Unknown }))), Placement: S.optional(S.extend(S.Struct({ Constraints: S.optional(S.Array(S.String)), Preferences: S.optional(S.Array(S.extend(S.Struct({ Spread: S.optional(S.extend(S.Struct({ SpreadDescriptor: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown })))), MaxReplicas: Int_default_0_prop, Platforms: S.optional(S.Array(Platform)) }), S.Record({ key: S.String, value: S.Unknown }))), ForceUpdate: S.optional(S.Int), Runtime: S.optional(S.String), Networks: S.optional(S.Array(NetworkAttachmentConfig)), LogDriver: S.optional(S.extend(S.Struct({ Name: S.optional(S.String), Options: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }));
export type TaskSpec = S.Schema.Type<typeof TaskSpec>;

export const TaskState = S.Union(S.Literal("new"), S.Literal("allocated"), S.Literal("pending"), S.Literal("assigned"), S.Literal("accepted"), S.Literal("preparing"), S.Literal("ready"), S.Literal("starting"), S.Literal("running"), S.Literal("complete"), S.Literal("shutdown"), S.Literal("failed"), S.Literal("rejected"), S.Literal("remove"), S.Literal("orphaned"));
export type TaskState = S.Schema.Type<typeof TaskState>;

export const Task = S.extend(S.Struct({ ID: S.optional(S.String), Version: S.optional(ObjectVersion), CreatedAt: S.optional(S.String), UpdatedAt: S.optional(S.String), Name: S.optional(S.String), Labels: S.optional(S.Record({ key: S.String, value: S.String })), Spec: S.optional(TaskSpec), ServiceID: S.optional(S.String), Slot: S.optional(S.Int), NodeID: S.optional(S.String), AssignedGenericResources: S.optional(GenericResources), Status: S.optional(S.extend(S.Struct({ Timestamp: S.optional(S.String), State: S.optional(TaskState), Message: S.optional(S.String), Err: S.optional(S.String), ContainerStatus: S.optional(S.extend(S.Struct({ ContainerID: S.optional(S.String), PID: S.optional(S.Int), ExitCode: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }))), DesiredState: S.optional(TaskState), JobIteration: S.optional(ObjectVersion) }), S.Record({ key: S.String, value: S.Unknown }));
export type Task = S.Schema.Type<typeof Task>;

export const EndpointPortConfig = S.extend(S.Struct({ Name: S.optional(S.String), Protocol: S.optional(S.Union(S.Literal("tcp"), S.Literal("udp"), S.Literal("sctp"))), TargetPort: S.optional(S.Int), PublishedPort: S.optional(S.Int), PublishMode: Union_default_ingress_prop }), S.Record({ key: S.String, value: S.Unknown }));
export type EndpointPortConfig = S.Schema.Type<typeof EndpointPortConfig>;

export const EndpointSpec = S.extend(S.Struct({ Mode: Union_default_vip_prop, Ports: S.optional(S.Array(EndpointPortConfig)) }), S.Record({ key: S.String, value: S.Unknown }));
export type EndpointSpec = S.Schema.Type<typeof EndpointSpec>;

export const ServiceSpec = S.extend(S.Struct({ Name: S.optional(S.String), Labels: S.optional(S.Record({ key: S.String, value: S.String })), TaskTemplate: S.optional(TaskSpec), Mode: S.optional(S.extend(S.Struct({ Replicated: S.optional(S.extend(S.Struct({ Replicas: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), Global: S.optional(S.extend(S.Struct({  }), S.Record({ key: S.String, value: S.Unknown }))), ReplicatedJob: S.optional(S.extend(S.Struct({ MaxConcurrent: Int_default_1_prop, TotalCompletions: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), GlobalJob: S.optional(S.extend(S.Struct({  }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }))), UpdateConfig: S.optional(S.extend(S.Struct({ Parallelism: S.optional(S.Int), Delay: S.optional(S.Int), FailureAction: S.optional(S.Union(S.Literal("continue"), S.Literal("pause"), S.Literal("rollback"))), Monitor: S.optional(S.Int), MaxFailureRatio: S.optional(S.Number), Order: S.optional(S.Union(S.Literal("stop-first"), S.Literal("start-first"))) }), S.Record({ key: S.String, value: S.Unknown }))), RollbackConfig: S.optional(S.extend(S.Struct({ Parallelism: S.optional(S.Int), Delay: S.optional(S.Int), FailureAction: S.optional(S.Union(S.Literal("continue"), S.Literal("pause"))), Monitor: S.optional(S.Int), MaxFailureRatio: S.optional(S.Number), Order: S.optional(S.Union(S.Literal("stop-first"), S.Literal("start-first"))) }), S.Record({ key: S.String, value: S.Unknown }))), Networks: S.optional(S.Array(NetworkAttachmentConfig)), EndpointSpec: S.optional(EndpointSpec) }), S.Record({ key: S.String, value: S.Unknown }));
export type ServiceSpec = S.Schema.Type<typeof ServiceSpec>;

export const Service = S.extend(S.Struct({ ID: S.optional(S.String), Version: S.optional(ObjectVersion), CreatedAt: S.optional(S.String), UpdatedAt: S.optional(S.String), Spec: S.optional(ServiceSpec), Endpoint: S.optional(S.extend(S.Struct({ Spec: S.optional(EndpointSpec), Ports: S.optional(S.Array(EndpointPortConfig)), VirtualIPs: S.optional(S.Array(S.extend(S.Struct({ NetworkID: S.optional(S.String), Addr: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })))) }), S.Record({ key: S.String, value: S.Unknown }))), UpdateStatus: S.optional(S.extend(S.Struct({ State: S.optional(S.Union(S.Literal("updating"), S.Literal("paused"), S.Literal("completed"))), StartedAt: S.optional(S.String), CompletedAt: S.optional(S.String), Message: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))), ServiceStatus: S.optional(S.extend(S.Struct({ RunningTasks: S.optional(S.Int), DesiredTasks: S.optional(S.Int), CompletedTasks: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), JobStatus: S.optional(S.extend(S.Struct({ JobIteration: S.optional(ObjectVersion), LastExecution: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))) }), S.Record({ key: S.String, value: S.Unknown }));
export type Service = S.Schema.Type<typeof Service>;

export const ImageDeleteResponseItem = S.extend(S.Struct({ Untagged: S.optional(S.String), Deleted: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type ImageDeleteResponseItem = S.Schema.Type<typeof ImageDeleteResponseItem>;

export const ServiceUpdateResponse = S.extend(S.Struct({ Warnings: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }));
export type ServiceUpdateResponse = S.Schema.Type<typeof ServiceUpdateResponse>;

export const ContainerSummary = S.extend(S.Struct({ Id: S.optional(S.String), Names: S.optional(S.Array(S.String)), Image: S.optional(S.String), ImageID: S.optional(S.String), Command: S.optional(S.String), Created: S.optional(S.Int), Ports: S.optional(S.Array(Port)), SizeRw: S.optional(S.Int), SizeRootFs: S.optional(S.Int), Labels: S.optional(S.Record({ key: S.String, value: S.String })), State: S.optional(S.String), Status: S.optional(S.String), HostConfig: S.optional(S.extend(S.Struct({ NetworkMode: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))), NetworkSettings: S.optional(S.extend(S.Struct({ Networks: S.optional(S.Record({ key: S.String, value: EndpointSettings })) }), S.Record({ key: S.String, value: S.Unknown }))), Mounts: S.optional(S.Array(MountPoint)) }), S.Record({ key: S.String, value: S.Unknown }));
export type ContainerSummary = S.Schema.Type<typeof ContainerSummary>;

export const Driver = S.extend(S.Struct({ Name: S.String, Options: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }));
export type Driver = S.Schema.Type<typeof Driver>;

export const SecretSpec = S.extend(S.Struct({ Name: S.optional(S.String), Labels: S.optional(S.Record({ key: S.String, value: S.String })), Data: S.optional(S.String), Driver: S.optional(Driver), Templating: S.optional(Driver) }), S.Record({ key: S.String, value: S.Unknown }));
export type SecretSpec = S.Schema.Type<typeof SecretSpec>;

export const Secret = S.extend(S.Struct({ ID: S.optional(S.String), Version: S.optional(ObjectVersion), CreatedAt: S.optional(S.String), UpdatedAt: S.optional(S.String), Spec: S.optional(SecretSpec) }), S.Record({ key: S.String, value: S.Unknown }));
export type Secret = S.Schema.Type<typeof Secret>;

export const ConfigSpec = S.extend(S.Struct({ Name: S.optional(S.String), Labels: S.optional(S.Record({ key: S.String, value: S.String })), Data: S.optional(S.String), Templating: S.optional(Driver) }), S.Record({ key: S.String, value: S.Unknown }));
export type ConfigSpec = S.Schema.Type<typeof ConfigSpec>;

export const Config = S.extend(S.Struct({ ID: S.optional(S.String), Version: S.optional(ObjectVersion), CreatedAt: S.optional(S.String), UpdatedAt: S.optional(S.String), Spec: S.optional(ConfigSpec) }), S.Record({ key: S.String, value: S.Unknown }));
export type Config = S.Schema.Type<typeof Config>;

export const ContainerState = S.NullOr(S.extend(S.Struct({ Status: S.optional(S.Union(S.Literal("created"), S.Literal("running"), S.Literal("paused"), S.Literal("restarting"), S.Literal("removing"), S.Literal("exited"), S.Literal("dead"))), Running: S.optional(S.Boolean), Paused: S.optional(S.Boolean), Restarting: S.optional(S.Boolean), OOMKilled: S.optional(S.Boolean), Dead: S.optional(S.Boolean), Pid: S.optional(S.Int), ExitCode: S.optional(S.Int), Error: S.optional(S.String), StartedAt: S.optional(S.String), FinishedAt: S.optional(S.String), Health: S.optional(Health) }), S.Record({ key: S.String, value: S.Unknown })));
export type ContainerState = S.Schema.Type<typeof ContainerState>;

export const ContainerCreateResponse = S.extend(S.Struct({ Id: S.String, Warnings: S.Array(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type ContainerCreateResponse = S.Schema.Type<typeof ContainerCreateResponse>;

export const ContainerWaitExitError = S.extend(S.Struct({ Message: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type ContainerWaitExitError = S.Schema.Type<typeof ContainerWaitExitError>;

export const ContainerWaitResponse = S.extend(S.Struct({ StatusCode: S.Int, Error: S.optional(ContainerWaitExitError) }), S.Record({ key: S.String, value: S.Unknown }));
export type ContainerWaitResponse = S.Schema.Type<typeof ContainerWaitResponse>;

export const SystemVersion = S.extend(S.Struct({ Platform: S.optional(S.extend(S.Struct({ Name: S.String }), S.Record({ key: S.String, value: S.Unknown }))), Components: S.optional(S.Array(S.extend(S.Struct({ Name: S.String, Version: S.String, Details: S.optional(S.NullOr(S.extend(S.Struct({  }), S.Record({ key: S.String, value: S.Unknown })))) }), S.Record({ key: S.String, value: S.Unknown })))), Version: S.optional(S.String), ApiVersion: S.optional(S.String), MinAPIVersion: S.optional(S.String), GitCommit: S.optional(S.String), GoVersion: S.optional(S.String), Os: S.optional(S.String), Arch: S.optional(S.String), KernelVersion: S.optional(S.String), Experimental: S.optional(S.Boolean), BuildTime: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type SystemVersion = S.Schema.Type<typeof SystemVersion>;

export const PluginsInfo = S.extend(S.Struct({ Volume: S.optional(S.Array(S.String)), Network: S.optional(S.Array(S.String)), Authorization: S.optional(S.Array(S.String)), Log: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }));
export type PluginsInfo = S.Schema.Type<typeof PluginsInfo>;

export const IndexInfo = S.NullOr(S.extend(S.Struct({ Name: S.optional(S.String), Mirrors: S.optional(S.Array(S.String)), Secure: S.optional(S.Boolean), Official: S.optional(S.Boolean) }), S.Record({ key: S.String, value: S.Unknown })));
export type IndexInfo = S.Schema.Type<typeof IndexInfo>;

export const RegistryServiceConfig = S.NullOr(S.extend(S.Struct({ AllowNondistributableArtifactsCIDRs: S.optional(S.Array(S.String)), AllowNondistributableArtifactsHostnames: S.optional(S.Array(S.String)), InsecureRegistryCIDRs: S.optional(S.Array(S.String)), IndexConfigs: S.optional(S.Record({ key: S.String, value: IndexInfo })), Mirrors: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown })));
export type RegistryServiceConfig = S.Schema.Type<typeof RegistryServiceConfig>;

export const Runtime = S.extend(S.Struct({ path: S.optional(S.String), runtimeArgs: S.optional(S.NullOr(S.Array(S.String))) }), S.Record({ key: S.String, value: S.Unknown }));
export type Runtime = S.Schema.Type<typeof Runtime>;

export const LocalNodeState = Union_default_value;
export type LocalNodeState = S.Schema.Type<typeof LocalNodeState>;

export const PeerNode = S.extend(S.Struct({ NodeID: S.optional(S.String), Addr: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type PeerNode = S.Schema.Type<typeof PeerNode>;

export const SwarmInfo = S.extend(S.Struct({ NodeID: String_default_value_prop, NodeAddr: String_default_value_prop, LocalNodeState: S.optional(LocalNodeState), ControlAvailable: Boolean_default_false_prop, Error: String_default_value_prop, RemoteManagers: S.optional(S.NullOr(S.Array(PeerNode))), Nodes: S.optional(S.NullOr(S.Int)), Managers: S.optional(S.NullOr(S.Int)), Cluster: S.optional(ClusterInfo) }), S.Record({ key: S.String, value: S.Unknown }));
export type SwarmInfo = S.Schema.Type<typeof SwarmInfo>;

export const Commit = S.extend(S.Struct({ ID: S.optional(S.String), Expected: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type Commit = S.Schema.Type<typeof Commit>;

export const SystemInfo = S.extend(S.Struct({ ID: S.optional(S.String), Containers: S.optional(S.Int), ContainersRunning: S.optional(S.Int), ContainersPaused: S.optional(S.Int), ContainersStopped: S.optional(S.Int), Images: S.optional(S.Int), Driver: S.optional(S.String), DriverStatus: S.optional(S.Array(S.Array(S.String))), DockerRootDir: S.optional(S.String), Plugins: S.optional(PluginsInfo), MemoryLimit: S.optional(S.Boolean), SwapLimit: S.optional(S.Boolean), KernelMemoryTCP: S.optional(S.Boolean), CpuCfsPeriod: S.optional(S.Boolean), CpuCfsQuota: S.optional(S.Boolean), CPUShares: S.optional(S.Boolean), CPUSet: S.optional(S.Boolean), PidsLimit: S.optional(S.Boolean), OomKillDisable: S.optional(S.Boolean), IPv4Forwarding: S.optional(S.Boolean), BridgeNfIptables: S.optional(S.Boolean), BridgeNfIp6tables: S.optional(S.Boolean), Debug: S.optional(S.Boolean), NFd: S.optional(S.Int), NGoroutines: S.optional(S.Int), SystemTime: S.optional(S.String), LoggingDriver: S.optional(S.String), CgroupDriver: Union_default_cgroupfs_prop, CgroupVersion: Union_default_1_prop, NEventsListener: S.optional(S.Int), KernelVersion: S.optional(S.String), OperatingSystem: S.optional(S.String), OSVersion: S.optional(S.String), OSType: S.optional(S.String), Architecture: S.optional(S.String), NCPU: S.optional(S.Int), MemTotal: S.optional(S.Int), IndexServerAddress: String_default_https_index_docker_io_v1_prop, RegistryConfig: S.optional(RegistryServiceConfig), GenericResources: S.optional(GenericResources), HttpProxy: S.optional(S.String), HttpsProxy: S.optional(S.String), NoProxy: S.optional(S.String), Name: S.optional(S.String), Labels: S.optional(S.Array(S.String)), ExperimentalBuild: S.optional(S.Boolean), ServerVersion: S.optional(S.String), Runtimes: S.optional(S.Record({ key: S.String, value: Runtime })), DefaultRuntime: String_default_runc_prop, Swarm: S.optional(SwarmInfo), LiveRestoreEnabled: Boolean_default_false_prop, Isolation: Union_default_default_prop, InitBinary: S.optional(S.String), ContainerdCommit: S.optional(Commit), RuncCommit: S.optional(Commit), InitCommit: S.optional(Commit), SecurityOptions: S.optional(S.Array(S.String)), ProductLicense: S.optional(S.String), DefaultAddressPools: S.optional(S.Array(S.extend(S.Struct({ Base: S.optional(S.String), Size: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })))), Warnings: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown }));
export type SystemInfo = S.Schema.Type<typeof SystemInfo>;

export const EventActor = S.extend(S.Struct({ ID: S.optional(S.String), Attributes: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown }));
export type EventActor = S.Schema.Type<typeof EventActor>;

export const EventMessage = S.extend(S.Struct({ Type: S.optional(S.Union(S.Literal("builder"), S.Literal("config"), S.Literal("container"), S.Literal("daemon"), S.Literal("image"), S.Literal("network"), S.Literal("node"), S.Literal("plugin"), S.Literal("secret"), S.Literal("service"), S.Literal("volume"))), Action: S.optional(S.String), Actor: S.optional(EventActor), scope: S.optional(S.Union(S.Literal("local"), S.Literal("swarm"))), time: S.optional(S.Int), timeNano: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type EventMessage = S.Schema.Type<typeof EventMessage>;

export const OCIDescriptor = S.extend(S.Struct({ mediaType: S.optional(S.String), digest: S.optional(S.String), size: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }));
export type OCIDescriptor = S.Schema.Type<typeof OCIDescriptor>;

export const OCIPlatform = S.extend(S.Struct({ architecture: S.optional(S.String), os: S.optional(S.String), "os.version": S.optional(S.String), "os.features": S.optional(S.Array(S.String)), variant: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }));
export type OCIPlatform = S.Schema.Type<typeof OCIPlatform>;

export const DistributionInspect = S.extend(S.Struct({ Descriptor: OCIDescriptor, Platforms: S.Array(OCIPlatform) }), S.Record({ key: S.String, value: S.Unknown }));
export type DistributionInspect = S.Schema.Type<typeof DistributionInspect>;

// </Schemas>

// <Endpoints>
export type get_ContainerList = typeof get_ContainerList;
export const get_ContainerList = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/json"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ all: Union_default_false_prop, limit: S.optional(S.NumberFromString.pipe(S.int())), size: Union_default_false_prop, filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["all", "limit", "size", "filters"].includes(key))))) },
  responses: { 200: S.Array(ContainerSummary), 400: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerCreate = typeof post_ContainerCreate;
export const post_ContainerCreate = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/create"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ name: S.optional(S.String.pipe(S.pattern(new RegExp("^/?[a-zA-Z0-9][a-zA-Z0-9_.-]+$")))), platform: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name", "platform"].includes(key))))), body: S.extend(ContainerConfig, S.extend(S.Struct({ HostConfig: S.optional(HostConfig), NetworkingConfig: S.optional(NetworkingConfig) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 201: ContainerCreateResponse, 400: ErrorResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerInspect = typeof get_ContainerInspect;
export const get_ContainerInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/{id}/json"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ size: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["size"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.extend(S.Struct({ Id: S.optional(S.String), Created: S.optional(S.String), Path: S.optional(S.String), Args: S.optional(S.Array(S.String)), State: S.optional(ContainerState), Image: S.optional(S.String), ResolvConfPath: S.optional(S.String), HostnamePath: S.optional(S.String), HostsPath: S.optional(S.String), LogPath: S.optional(S.String), Name: S.optional(S.String), RestartCount: S.optional(S.Int), Driver: S.optional(S.String), Platform: S.optional(S.String), MountLabel: S.optional(S.String), ProcessLabel: S.optional(S.String), AppArmorProfile: S.optional(S.String), ExecIDs: S.optional(S.NullOr(S.Array(S.String))), HostConfig: S.optional(HostConfig), GraphDriver: S.optional(GraphDriverData), SizeRw: S.optional(S.Int), SizeRootFs: S.optional(S.Int), Mounts: S.optional(S.Array(MountPoint)), Config: S.optional(ContainerConfig), NetworkSettings: S.optional(NetworkSettings) }), S.Record({ key: S.String, value: S.Unknown })), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerTop = typeof get_ContainerTop;
export const get_ContainerTop = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/{id}/top"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ ps_args: String_default_neg_ef_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["ps_args"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Union(S.extend(S.Struct({ Titles: S.optional(S.Array(S.String)), Processes: S.optional(S.Array(S.Array(S.String))) }), S.Record({ key: S.String, value: S.Unknown })), S.extend(S.Struct({ Titles: S.optional(S.Array(S.String)), Processes: S.optional(S.Array(S.Array(S.String))) }), S.Record({ key: S.String, value: S.Unknown }))), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_ContainerLogs = typeof get_ContainerLogs;
export const get_ContainerLogs = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/{id}/logs"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ follow: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop, since: Schema_default_0_prop, until: Schema_default_0_prop, timestamps: Union_default_false_prop, tail: String_default_all_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["follow", "stdout", "stderr", "since", "until", "timestamps", "tail"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Unknown, 500: S.Unknown },
};

export type get_ContainerChanges = typeof get_ContainerChanges;
export const get_ContainerChanges = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/{id}/changes"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Array(FilesystemChange), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ContainerExport = typeof get_ContainerExport;
export const get_ContainerExport = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/{id}/export"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Union(ErrorResponse, S.Unknown), 500: ErrorResponse },
};

export type get_ContainerStats = typeof get_ContainerStats;
export const get_ContainerStats = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/{id}/stats"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ stream: Union_default_true_prop, "one-shot": Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["stream", "one-shot"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Record({ key: S.String, value: S.Unknown }), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerResize = typeof post_ContainerResize;
export const post_ContainerResize = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/resize"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ h: S.optional(S.NumberFromString.pipe(S.int())), w: S.optional(S.NumberFromString.pipe(S.int())) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["h", "w"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Union(ErrorResponse, S.Unknown), 500: ErrorResponse },
};

export type post_ContainerStart = typeof post_ContainerStart;
export const post_ContainerStart = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/start"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ detachKeys: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["detachKeys"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 304: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ContainerStop = typeof post_ContainerStop;
export const post_ContainerStop = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/stop"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ signal: S.optional(S.String), t: S.optional(S.NumberFromString.pipe(S.int())) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["signal", "t"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 304: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ContainerRestart = typeof post_ContainerRestart;
export const post_ContainerRestart = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/restart"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ signal: S.optional(S.String), t: S.optional(S.NumberFromString.pipe(S.int())) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["signal", "t"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ContainerKill = typeof post_ContainerKill;
export const post_ContainerKill = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/kill"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ signal: String_default_SIGKILL_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["signal"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 409: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ContainerUpdate = typeof post_ContainerUpdate;
export const post_ContainerUpdate = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/update"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: S.extend(Resources, S.extend(S.Struct({ RestartPolicy: S.optional(RestartPolicy) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 200: S.extend(S.Struct({ Warnings: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown })), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ContainerRename = typeof post_ContainerRename;
export const post_ContainerRename = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/rename"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 409: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ContainerPause = typeof post_ContainerPause;
export const post_ContainerPause = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/pause"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ContainerUnpause = typeof post_ContainerUnpause;
export const post_ContainerUnpause = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/unpause"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ContainerAttach = typeof post_ContainerAttach;
export const post_ContainerAttach = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/attach"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ detachKeys: S.optional(S.String), logs: Union_default_false_prop, stream: Union_default_false_prop, stdin: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["detachKeys", "logs", "stream", "stdin", "stdout", "stderr"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 101: S.Unknown, 200: S.Unknown, 400: S.Unknown, 404: S.Unknown, 500: S.Unknown },
};

export type get_ContainerAttachWebsocket = typeof get_ContainerAttachWebsocket;
export const get_ContainerAttachWebsocket = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/{id}/attach/ws"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ detachKeys: S.optional(S.String), logs: Union_default_false_prop, stream: Union_default_false_prop, stdin: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["detachKeys", "logs", "stream", "stdin", "stdout", "stderr"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 101: S.Unknown, 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ContainerWait = typeof post_ContainerWait;
export const post_ContainerWait = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/wait"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ condition: Union_default_notneg_running_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["condition"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: ContainerWaitResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_ContainerDelete = typeof delete_ContainerDelete;
export const delete_ContainerDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/containers/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ v: Union_default_false_prop, force: Union_default_false_prop, link: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["v", "force", "link"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 409: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_ContainerArchive = typeof get_ContainerArchive;
export const get_ContainerArchive = {
  method: S.Literal("GET"),
  path: S.Literal("/containers/{id}/archive"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ path: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["path"].includes(key)))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 400: S.Unknown, 404: S.Unknown, 500: S.Unknown },
};

export type put_PutContainerArchive = typeof put_PutContainerArchive;
export const put_PutContainerArchive = {
  method: S.Literal("PUT"),
  path: S.Literal("/containers/{id}/archive"),
  requestFormat: S.Literal("binary"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ path: S.String, noOverwriteDirNonDir: S.optional(S.String), copyUIDGID: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["path", "noOverwriteDirNonDir", "copyUIDGID"].includes(key)))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: S.declare((v): v is Blob => typeof Blob !== "undefined" && v instanceof Blob) },
  responses: { 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 403: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type head_ContainerArchiveInfo = typeof head_ContainerArchiveInfo;
export const head_ContainerArchiveInfo = {
  method: S.Literal("HEAD"),
  path: S.Literal("/containers/{id}/archive"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ path: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["path"].includes(key)))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
  responseHeaders: { 200: S.Struct({ "X-Docker-Container-Path-Stat": S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["X-Docker-Container-Path-Stat"].includes(key)))) },
};

export type post_ContainerPrune = typeof post_ContainerPrune;
export const post_ContainerPrune = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/prune"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.extend(S.Struct({ ContainersDeleted: S.optional(S.Array(S.String)), SpaceReclaimed: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })), 500: ErrorResponse },
};

export type get_ImageList = typeof get_ImageList;
export const get_ImageList = {
  method: S.Literal("GET"),
  path: S.Literal("/images/json"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ all: Union_default_false_prop, filters: S.optional(S.String), "shared-size": Union_default_false_prop, digests: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["all", "filters", "shared-size", "digests"].includes(key))))) },
  responses: { 200: S.Array(ImageSummary), 500: ErrorResponse },
};

export type post_ImageBuild = typeof post_ImageBuild;
export const post_ImageBuild = {
  method: S.Literal("POST"),
  path: S.Literal("/build"),
  requestFormat: S.Literal("binary"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ dockerfile: String_default_Dockerfile_prop, t: S.optional(S.String), extrahosts: S.optional(S.String), remote: S.optional(S.String), q: Union_default_false_prop, nocache: Union_default_false_prop, cachefrom: S.optional(S.String), pull: S.optional(S.String), rm: Union_default_true_prop, forcerm: Union_default_false_prop, memory: S.optional(S.NumberFromString.pipe(S.int())), memswap: S.optional(S.NumberFromString.pipe(S.int())), cpushares: S.optional(S.NumberFromString.pipe(S.int())), cpusetcpus: S.optional(S.String), cpuperiod: S.optional(S.NumberFromString.pipe(S.int())), cpuquota: S.optional(S.NumberFromString.pipe(S.int())), buildargs: S.optional(S.String), shmsize: S.optional(S.NumberFromString.pipe(S.int())), squash: S.optional(S.transform(S.Union(S.Boolean, S.String, S.Number), S.Boolean, { decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })), labels: S.optional(S.String), networkmode: S.optional(S.String), platform: S.optional(S.String), target: S.optional(S.String), outputs: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["dockerfile", "t", "extrahosts", "remote", "q", "nocache", "cachefrom", "pull", "rm", "forcerm", "memory", "memswap", "cpushares", "cpusetcpus", "cpuperiod", "cpuquota", "buildargs", "shmsize", "squash", "labels", "networkmode", "platform", "target", "outputs"].includes(key))))), header: S.optional(S.Struct({ "Content-type": S.optional(S.Literal("application/x-tar")), "X-Registry-Config": S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["Content-type", "X-Registry-Config"].includes(key))))), body: S.declare((v): v is Blob => typeof Blob !== "undefined" && v instanceof Blob) },
  responses: { 200: S.Unknown, 400: ErrorResponse, 500: ErrorResponse },
};

export type post_BuildPrune = typeof post_BuildPrune;
export const post_BuildPrune = {
  method: S.Literal("POST"),
  path: S.Literal("/build/prune"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ "keep-storage": S.optional(S.NumberFromString.pipe(S.int())), all: S.optional(S.transform(S.Union(S.Boolean, S.String, S.Number), S.Boolean, { decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })), filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["keep-storage", "all", "filters"].includes(key))))) },
  responses: { 200: S.extend(S.Struct({ CachesDeleted: S.optional(S.Array(S.String)), SpaceReclaimed: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })), 500: ErrorResponse },
};

export type post_ImageCreate = typeof post_ImageCreate;
export const post_ImageCreate = {
  method: S.Literal("POST"),
  path: S.Literal("/images/create"),
  requestFormat: S.Literal("text"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ fromImage: S.optional(S.String), fromSrc: S.optional(S.String), repo: S.optional(S.String), tag: S.optional(S.String), message: S.optional(S.String), changes: S.optional(S.Array(S.String)), platform: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["fromImage", "fromSrc", "repo", "tag", "message", "changes", "platform"].includes(key))))), header: S.optional(S.Struct({ "X-Registry-Auth": S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["X-Registry-Auth"].includes(key))))), body: S.String },
  responses: { 200: S.Unknown, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageInspect = typeof get_ImageInspect;
export const get_ImageInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/images/{name}/json"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: ImageInspect, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageHistory = typeof get_ImageHistory;
export const get_ImageHistory = {
  method: S.Literal("GET"),
  path: S.Literal("/images/{name}/history"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: S.Array(S.extend(S.Struct({ Id: S.String, Created: S.Int, CreatedBy: S.String, Tags: S.Array(S.String), Size: S.Int, Comment: S.String }), S.Record({ key: S.String, value: S.Unknown }))), 404: ErrorResponse, 500: ErrorResponse },
};

export type post_ImagePush = typeof post_ImagePush;
export const post_ImagePush = {
  method: S.Literal("POST"),
  path: S.Literal("/images/{name}/push"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ tag: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["tag"].includes(key))))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))), header: S.Struct({ "X-Registry-Auth": S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["X-Registry-Auth"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ImageTag = typeof post_ImageTag;
export const post_ImageTag = {
  method: S.Literal("POST"),
  path: S.Literal("/images/{name}/tag"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ repo: S.optional(S.String), tag: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["repo", "tag"].includes(key))))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 201: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 409: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type delete_ImageDelete = typeof delete_ImageDelete;
export const delete_ImageDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/images/{name}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ force: Union_default_false_prop, noprune: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["force", "noprune"].includes(key))))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: S.Array(ImageDeleteResponseItem), 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type get_ImageSearch = typeof get_ImageSearch;
export const get_ImageSearch = {
  method: S.Literal("GET"),
  path: S.Literal("/images/search"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ term: S.String, limit: S.optional(S.NumberFromString.pipe(S.int())), filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["term", "limit", "filters"].includes(key)))) },
  responses: { 200: S.Array(S.extend(S.Struct({ description: S.optional(S.String), is_official: S.optional(S.Boolean), is_automated: S.optional(S.Boolean), name: S.optional(S.String), star_count: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown }))), 500: ErrorResponse },
};

export type post_ImagePrune = typeof post_ImagePrune;
export const post_ImagePrune = {
  method: S.Literal("POST"),
  path: S.Literal("/images/prune"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.extend(S.Struct({ ImagesDeleted: S.optional(S.Array(ImageDeleteResponseItem)), SpaceReclaimed: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })), 500: ErrorResponse },
};

export type post_SystemAuth = typeof post_SystemAuth;
export const post_SystemAuth = {
  method: S.Literal("POST"),
  path: S.Literal("/auth"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: AuthConfig },
  responses: { 200: S.extend(S.Struct({ Status: S.String, IdentityToken: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })), 204: S.Unknown, 401: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemInfo = typeof get_SystemInfo;
export const get_SystemInfo = {
  method: S.Literal("GET"),
  path: S.Literal("/info"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 200: SystemInfo, 500: ErrorResponse },
};

export type get_SystemVersion = typeof get_SystemVersion;
export const get_SystemVersion = {
  method: S.Literal("GET"),
  path: S.Literal("/version"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 200: SystemVersion, 500: ErrorResponse },
};

export type get_SystemPing = typeof get_SystemPing;
export const get_SystemPing = {
  method: S.Literal("GET"),
  path: S.Literal("/_ping"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 200: S.String, 500: ErrorResponse },
  responseHeaders: { 200: S.Struct({ Swarm: Union_default_inactive_prop, "Docker-Experimental": S.Boolean, "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop, Pragma: String_default_noneg_cache_prop, "API-Version": S.String, "Builder-Version": String_default_2_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["Swarm", "Docker-Experimental", "Cache-Control", "Pragma", "API-Version", "Builder-Version"].includes(key)))), 500: S.Struct({ "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop, Pragma: String_default_noneg_cache_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["Cache-Control", "Pragma"].includes(key)))) },
};

export type head_SystemPingHead = typeof head_SystemPingHead;
export const head_SystemPingHead = {
  method: S.Literal("HEAD"),
  path: S.Literal("/_ping"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 200: S.String, 500: ErrorResponse },
  responseHeaders: { 200: S.Struct({ Swarm: Union_default_inactive_prop, "Docker-Experimental": S.Boolean, "Cache-Control": String_default_noneg_cache_noneg_store_mustneg_revalida_prop, Pragma: String_default_noneg_cache_prop, "API-Version": S.String, "Builder-Version": S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["Swarm", "Docker-Experimental", "Cache-Control", "Pragma", "API-Version", "Builder-Version"].includes(key)))) },
};

export type post_ImageCommit = typeof post_ImageCommit;
export const post_ImageCommit = {
  method: S.Literal("POST"),
  path: S.Literal("/commit"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ container: S.optional(S.String), repo: S.optional(S.String), tag: S.optional(S.String), comment: S.optional(S.String), author: S.optional(S.String), pause: Union_default_true_prop, changes: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["container", "repo", "tag", "comment", "author", "pause", "changes"].includes(key))))), body: ContainerConfig },
  responses: { 201: IdResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemEvents = typeof get_SystemEvents;
export const get_SystemEvents = {
  method: S.Literal("GET"),
  path: S.Literal("/events"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ since: S.optional(S.String), until: S.optional(S.String), filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["since", "until", "filters"].includes(key))))) },
  responses: { 200: EventMessage, 400: ErrorResponse, 500: ErrorResponse },
};

export type get_SystemDataUsage = typeof get_SystemDataUsage;
export const get_SystemDataUsage = {
  method: S.Literal("GET"),
  path: S.Literal("/system/df"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ type: S.optional(S.Array(S.Union(S.Literal("container"), S.Literal("image"), S.Literal("volume"), S.Literal("build-cache")))) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["type"].includes(key))))) },
  responses: { 200: S.Union(S.extend(S.Struct({ LayersSize: S.optional(S.Int), Images: S.optional(S.Array(ImageSummary)), Containers: S.optional(S.Array(ContainerSummary)), Volumes: S.optional(S.Array(Volume)), BuildCache: S.optional(S.Array(BuildCache)) }), S.Record({ key: S.String, value: S.Unknown })), S.extend(S.Struct({ LayersSize: S.optional(S.Int), Images: S.optional(S.Array(ImageSummary)), Containers: S.optional(S.Array(ContainerSummary)), Volumes: S.optional(S.Array(Volume)), BuildCache: S.optional(S.Array(BuildCache)) }), S.Record({ key: S.String, value: S.Unknown }))), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_ImageGet = typeof get_ImageGet;
export const get_ImageGet = {
  method: S.Literal("GET"),
  path: S.Literal("/images/{name}/get"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: S.Unknown, 500: S.Unknown },
};

export type get_ImageGetAll = typeof get_ImageGetAll;
export const get_ImageGetAll = {
  method: S.Literal("GET"),
  path: S.Literal("/images/get"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ names: S.optional(S.Array(S.String)) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["names"].includes(key))))) },
  responses: { 200: S.Unknown, 500: S.Unknown },
};

export type post_ImageLoad = typeof post_ImageLoad;
export const post_ImageLoad = {
  method: S.Literal("POST"),
  path: S.Literal("/images/load"),
  requestFormat: S.Literal("text"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ quiet: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["quiet"].includes(key))))) },
  responses: { 200: S.Unknown, 500: ErrorResponse },
};

export type post_ContainerExec = typeof post_ContainerExec;
export const post_ContainerExec = {
  method: S.Literal("POST"),
  path: S.Literal("/containers/{id}/exec"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: S.optional(S.extend(S.Struct({ AttachStdin: S.optional(S.Boolean), AttachStdout: S.optional(S.Boolean), AttachStderr: S.optional(S.Boolean), ConsoleSize: S.optional(S.NullOr(S.Array(S.Int.pipe(S.greaterThanOrEqualTo(0))).pipe(S.minItems(2), S.maxItems(2)))), DetachKeys: S.optional(S.String), Tty: S.optional(S.Boolean), Env: S.optional(S.Array(S.String)), Cmd: S.optional(S.Array(S.String)), Privileged: Boolean_default_false_prop, User: S.optional(S.String), WorkingDir: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 201: IdResponse, 404: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse },
};

export type post_ExecStart = typeof post_ExecStart;
export const post_ExecStart = {
  method: S.Literal("POST"),
  path: S.Literal("/exec/{id}/start"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: S.optional(S.extend(S.Struct({ Detach: S.optional(S.Boolean), Tty: S.optional(S.Boolean), ConsoleSize: S.optional(S.NullOr(S.Array(S.Int.pipe(S.greaterThanOrEqualTo(0))).pipe(S.minItems(2), S.maxItems(2)))) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 200: S.Unknown, 404: S.Unknown, 409: S.Unknown },
};

export type post_ExecResize = typeof post_ExecResize;
export const post_ExecResize = {
  method: S.Literal("POST"),
  path: S.Literal("/exec/{id}/resize"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ h: S.optional(S.NumberFromString.pipe(S.int())), w: S.optional(S.NumberFromString.pipe(S.int())) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["h", "w"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_ExecInspect = typeof get_ExecInspect;
export const get_ExecInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/exec/{id}/json"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.extend(S.Struct({ CanRemove: S.optional(S.Boolean), DetachKeys: S.optional(S.String), ID: S.optional(S.String), Running: S.optional(S.Boolean), ExitCode: S.optional(S.Int), ProcessConfig: S.optional(ProcessConfig), OpenStdin: S.optional(S.Boolean), OpenStderr: S.optional(S.Boolean), OpenStdout: S.optional(S.Boolean), ContainerID: S.optional(S.String), Pid: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })), 404: ErrorResponse, 500: ErrorResponse },
};

export type get_VolumeList = typeof get_VolumeList;
export const get_VolumeList = {
  method: S.Literal("GET"),
  path: S.Literal("/volumes"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: VolumeListResponse, 500: ErrorResponse },
};

export type post_VolumeCreate = typeof post_VolumeCreate;
export const post_VolumeCreate = {
  method: S.Literal("POST"),
  path: S.Literal("/volumes/create"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: VolumeCreateOptions },
  responses: { 201: Volume, 500: ErrorResponse },
};

export type get_VolumeInspect = typeof get_VolumeInspect;
export const get_VolumeInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/volumes/{name}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: Volume, 404: ErrorResponse, 500: ErrorResponse },
};

export type put_VolumeUpdate = typeof put_VolumeUpdate;
export const put_VolumeUpdate = {
  method: S.Literal("PUT"),
  path: S.Literal("/volumes/{name}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ version: S.NumberFromString.pipe(S.int()) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["version"].includes(key)))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))), body: S.optional(S.extend(S.Struct({ Spec: S.optional(ClusterVolumeSpec) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 200: S.Unknown, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_VolumeDelete = typeof delete_VolumeDelete;
export const delete_VolumeDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/volumes/{name}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ force: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["force"].includes(key))))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 204: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 409: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_VolumePrune = typeof post_VolumePrune;
export const post_VolumePrune = {
  method: S.Literal("POST"),
  path: S.Literal("/volumes/prune"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.extend(S.Struct({ VolumesDeleted: S.optional(S.Array(S.String)), SpaceReclaimed: S.optional(S.Int) }), S.Record({ key: S.String, value: S.Unknown })), 500: ErrorResponse },
};

export type get_NetworkList = typeof get_NetworkList;
export const get_NetworkList = {
  method: S.Literal("GET"),
  path: S.Literal("/networks"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.Array(Network), 500: ErrorResponse },
};

export type get_NetworkInspect = typeof get_NetworkInspect;
export const get_NetworkInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/networks/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ verbose: Union_default_false_prop, scope: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["verbose", "scope"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: Network, 404: ErrorResponse, 500: ErrorResponse },
};

export type delete_NetworkDelete = typeof delete_NetworkDelete;
export const delete_NetworkDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/networks/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 403: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_NetworkCreate = typeof post_NetworkCreate;
export const post_NetworkCreate = {
  method: S.Literal("POST"),
  path: S.Literal("/networks/create"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: S.extend(S.Struct({ Name: S.String, CheckDuplicate: S.optional(S.Boolean), Driver: String_default_bridge_prop, Internal: S.optional(S.Boolean), Attachable: S.optional(S.Boolean), Ingress: S.optional(S.Boolean), IPAM: S.optional(IPAM), EnableIPv6: S.optional(S.Boolean), Options: S.optional(S.Record({ key: S.String, value: S.String })), Labels: S.optional(S.Record({ key: S.String, value: S.String })) }), S.Record({ key: S.String, value: S.Unknown })) },
  responses: { 201: S.extend(S.Struct({ Id: S.optional(S.String), Warning: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })), 403: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse },
};

export type post_NetworkConnect = typeof post_NetworkConnect;
export const post_NetworkConnect = {
  method: S.Literal("POST"),
  path: S.Literal("/networks/{id}/connect"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: S.optional(S.extend(S.Struct({ Container: S.optional(S.String), EndpointConfig: S.optional(EndpointSettings) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 200: S.Unknown, 403: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_NetworkDisconnect = typeof post_NetworkDisconnect;
export const post_NetworkDisconnect = {
  method: S.Literal("POST"),
  path: S.Literal("/networks/{id}/disconnect"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: S.optional(S.extend(S.Struct({ Container: S.optional(S.String), Force: S.optional(S.Boolean) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 200: S.Unknown, 403: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_NetworkPrune = typeof post_NetworkPrune;
export const post_NetworkPrune = {
  method: S.Literal("POST"),
  path: S.Literal("/networks/prune"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.extend(S.Struct({ NetworksDeleted: S.optional(S.Array(S.String)) }), S.Record({ key: S.String, value: S.Unknown })), 500: ErrorResponse },
};

export type get_PluginList = typeof get_PluginList;
export const get_PluginList = {
  method: S.Literal("GET"),
  path: S.Literal("/plugins"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.Array(Plugin), 500: ErrorResponse },
};

export type get_GetPluginPrivileges = typeof get_GetPluginPrivileges;
export const get_GetPluginPrivileges = {
  method: S.Literal("GET"),
  path: S.Literal("/plugins/privileges"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ remote: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["remote"].includes(key)))) },
  responses: { 200: S.Union(S.Array(PluginPrivilege), S.Array(PluginPrivilege)), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_PluginPull = typeof post_PluginPull;
export const post_PluginPull = {
  method: S.Literal("POST"),
  path: S.Literal("/plugins/pull"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ remote: S.String, name: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["remote", "name"].includes(key)))), header: S.optional(S.Struct({ "X-Registry-Auth": S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["X-Registry-Auth"].includes(key))))), body: S.Array(PluginPrivilege) },
  responses: { 204: S.Unknown, 500: ErrorResponse },
};

export type get_PluginInspect = typeof get_PluginInspect;
export const get_PluginInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/plugins/{name}/json"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: S.Union(Plugin, Plugin), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type delete_PluginDelete = typeof delete_PluginDelete;
export const delete_PluginDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/plugins/{name}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ force: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["force"].includes(key))))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: S.Union(Plugin, Plugin), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_PluginEnable = typeof post_PluginEnable;
export const post_PluginEnable = {
  method: S.Literal("POST"),
  path: S.Literal("/plugins/{name}/enable"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ timeout: Schema_default_0_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["timeout"].includes(key))))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_PluginDisable = typeof post_PluginDisable;
export const post_PluginDisable = {
  method: S.Literal("POST"),
  path: S.Literal("/plugins/{name}/disable"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ force: S.optional(S.transform(S.Union(S.Boolean, S.String, S.Number), S.Boolean, { decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["force"].includes(key))))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_PluginUpgrade = typeof post_PluginUpgrade;
export const post_PluginUpgrade = {
  method: S.Literal("POST"),
  path: S.Literal("/plugins/{name}/upgrade"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ remote: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["remote"].includes(key)))), path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))), header: S.optional(S.Struct({ "X-Registry-Auth": S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["X-Registry-Auth"].includes(key))))), body: S.Array(PluginPrivilege) },
  responses: { 204: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_PluginCreate = typeof post_PluginCreate;
export const post_PluginCreate = {
  method: S.Literal("POST"),
  path: S.Literal("/plugins/create"),
  requestFormat: S.Literal("text"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 204: S.Unknown, 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_PluginPush = typeof post_PluginPush;
export const post_PluginPush = {
  method: S.Literal("POST"),
  path: S.Literal("/plugins/{name}/push"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_PluginSet = typeof post_PluginSet;
export const post_PluginSet = {
  method: S.Literal("POST"),
  path: S.Literal("/plugins/{name}/set"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))), body: S.Array(S.String) },
  responses: { 204: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_NodeList = typeof get_NodeList;
export const get_NodeList = {
  method: S.Literal("GET"),
  path: S.Literal("/nodes"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.Union(S.Array(Node), S.Array(Node)), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_NodeInspect = typeof get_NodeInspect;
export const get_NodeInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/nodes/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Union(Node, Node), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type delete_NodeDelete = typeof delete_NodeDelete;
export const delete_NodeDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/nodes/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ force: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["force"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_NodeUpdate = typeof post_NodeUpdate;
export const post_NodeUpdate = {
  method: S.Literal("POST"),
  path: S.Literal("/nodes/{id}/update"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ version: S.NumberFromString.pipe(S.int()) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["version"].includes(key)))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: NodeSpec },
  responses: { 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_SwarmInspect = typeof get_SwarmInspect;
export const get_SwarmInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/swarm"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 200: S.Union(Swarm, Swarm), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_SwarmInit = typeof post_SwarmInit;
export const post_SwarmInit = {
  method: S.Literal("POST"),
  path: S.Literal("/swarm/init"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: S.optional(S.extend(S.Struct({ ListenAddr: S.optional(S.String), AdvertiseAddr: S.optional(S.String), DataPathAddr: S.optional(S.String), DataPathPort: S.optional(S.Int), DefaultAddrPool: S.optional(S.Array(S.String)), ForceNewCluster: S.optional(S.Boolean), SubnetSize: S.optional(S.Int), Spec: S.optional(SwarmSpec) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 200: S.Union(S.String, S.String), 400: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_SwarmJoin = typeof post_SwarmJoin;
export const post_SwarmJoin = {
  method: S.Literal("POST"),
  path: S.Literal("/swarm/join"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: S.optional(S.extend(S.Struct({ ListenAddr: S.optional(S.String), AdvertiseAddr: S.optional(S.String), DataPathAddr: S.optional(S.String), RemoteAddrs: S.optional(S.Array(S.String)), JoinToken: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_SwarmLeave = typeof post_SwarmLeave;
export const post_SwarmLeave = {
  method: S.Literal("POST"),
  path: S.Literal("/swarm/leave"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ force: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["force"].includes(key))))) },
  responses: { 200: S.Unknown, 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_SwarmUpdate = typeof post_SwarmUpdate;
export const post_SwarmUpdate = {
  method: S.Literal("POST"),
  path: S.Literal("/swarm/update"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ version: S.NumberFromString.pipe(S.int()), rotateWorkerToken: Union_default_false_prop, rotateManagerToken: Union_default_false_prop, rotateManagerUnlockKey: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["version", "rotateWorkerToken", "rotateManagerToken", "rotateManagerUnlockKey"].includes(key)))), body: SwarmSpec },
  responses: { 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_SwarmUnlockkey = typeof get_SwarmUnlockkey;
export const get_SwarmUnlockkey = {
  method: S.Literal("GET"),
  path: S.Literal("/swarm/unlockkey"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 200: S.Union(S.extend(S.Struct({ UnlockKey: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })), S.extend(S.Struct({ UnlockKey: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_SwarmUnlock = typeof post_SwarmUnlock;
export const post_SwarmUnlock = {
  method: S.Literal("POST"),
  path: S.Literal("/swarm/unlock"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: S.optional(S.extend(S.Struct({ UnlockKey: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown }))) },
  responses: { 200: S.Unknown, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceList = typeof get_ServiceList;
export const get_ServiceList = {
  method: S.Literal("GET"),
  path: S.Literal("/services"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String), status: S.optional(S.transform(S.Union(S.Boolean, S.String, S.Number), S.Boolean, { decode: (x) => x === true || x === "true" || x === 1 || x === "1", encode: (a) => a })) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters", "status"].includes(key))))) },
  responses: { 200: S.Union(S.Array(Service), S.Array(Service)), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ServiceCreate = typeof post_ServiceCreate;
export const post_ServiceCreate = {
  method: S.Literal("POST"),
  path: S.Literal("/services/create"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { header: S.optional(S.Struct({ "X-Registry-Auth": S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["X-Registry-Auth"].includes(key))))), body: ServiceSpec.pipe(S.filter((value) => S.is(S.Record({ key: S.String, value: S.Unknown }))(value))) },
  responses: { 201: S.extend(S.Struct({ ID: S.optional(S.String), Warning: S.optional(S.String) }), S.Record({ key: S.String, value: S.Unknown })), 400: ErrorResponse, 403: ErrorResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceInspect = typeof get_ServiceInspect;
export const get_ServiceInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/services/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ insertDefaults: Union_default_false_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["insertDefaults"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Union(Service, Service), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type delete_ServiceDelete = typeof delete_ServiceDelete;
export const delete_ServiceDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/services/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type post_ServiceUpdate = typeof post_ServiceUpdate;
export const post_ServiceUpdate = {
  method: S.Literal("POST"),
  path: S.Literal("/services/{id}/update"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ version: S.NumberFromString.pipe(S.int()), registryAuthFrom: Union_default_spec_prop, rollback: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["version", "registryAuthFrom", "rollback"].includes(key)))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), header: S.optional(S.Struct({ "X-Registry-Auth": S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["X-Registry-Auth"].includes(key))))), body: ServiceSpec.pipe(S.filter((value) => S.is(S.Record({ key: S.String, value: S.Unknown }))(value))) },
  responses: { 200: ServiceUpdateResponse, 400: ErrorResponse, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ServiceLogs = typeof get_ServiceLogs;
export const get_ServiceLogs = {
  method: S.Literal("GET"),
  path: S.Literal("/services/{id}/logs"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ details: Union_default_false_prop, follow: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop, since: Schema_default_0_prop, timestamps: Union_default_false_prop, tail: String_default_all_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["details", "follow", "stdout", "stderr", "since", "timestamps", "tail"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Unknown, 500: S.Unknown, 503: S.Unknown },
};

export type get_TaskList = typeof get_TaskList;
export const get_TaskList = {
  method: S.Literal("GET"),
  path: S.Literal("/tasks"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.Array(Task), 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskInspect = typeof get_TaskInspect;
export const get_TaskInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/tasks/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: Task, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_TaskLogs = typeof get_TaskLogs;
export const get_TaskLogs = {
  method: S.Literal("GET"),
  path: S.Literal("/tasks/{id}/logs"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ details: Union_default_false_prop, follow: Union_default_false_prop, stdout: Union_default_false_prop, stderr: Union_default_false_prop, since: Schema_default_0_prop, timestamps: Union_default_false_prop, tail: String_default_all_prop }).pipe(S.filter((data) => Object.keys(data).every((key) => ["details", "follow", "stdout", "stderr", "since", "timestamps", "tail"].includes(key))))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: S.Unknown, 404: S.Unknown, 500: S.Unknown, 503: S.Unknown },
};

export type get_SecretList = typeof get_SecretList;
export const get_SecretList = {
  method: S.Literal("GET"),
  path: S.Literal("/secrets"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.Array(Secret), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretCreate = typeof post_SecretCreate;
export const post_SecretCreate = {
  method: S.Literal("POST"),
  path: S.Literal("/secrets/create"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: SecretSpec.pipe(S.filter((value) => S.is(S.Record({ key: S.String, value: S.Unknown }))(value))) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_SecretInspect = typeof get_SecretInspect;
export const get_SecretInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/secrets/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: Secret, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_SecretDelete = typeof delete_SecretDelete;
export const delete_SecretDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/secrets/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_SecretUpdate = typeof post_SecretUpdate;
export const post_SecretUpdate = {
  method: S.Literal("POST"),
  path: S.Literal("/secrets/{id}/update"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ version: S.NumberFromString.pipe(S.int()) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["version"].includes(key)))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: SecretSpec },
  responses: { 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_ConfigList = typeof get_ConfigList;
export const get_ConfigList = {
  method: S.Literal("GET"),
  path: S.Literal("/configs"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.optional(S.Struct({ filters: S.optional(S.String) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["filters"].includes(key))))) },
  responses: { 200: S.Array(Config), 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigCreate = typeof post_ConfigCreate;
export const post_ConfigCreate = {
  method: S.Literal("POST"),
  path: S.Literal("/configs/create"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { body: ConfigSpec.pipe(S.filter((value) => S.is(S.Record({ key: S.String, value: S.Unknown }))(value))) },
  responses: { 201: IdResponse, 409: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type get_ConfigInspect = typeof get_ConfigInspect;
export const get_ConfigInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/configs/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 200: Config, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type delete_ConfigDelete = typeof delete_ConfigDelete;
export const delete_ConfigDelete = {
  method: S.Literal("DELETE"),
  path: S.Literal("/configs/{id}"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))) },
  responses: { 204: S.Unknown, 404: ErrorResponse, 500: ErrorResponse, 503: ErrorResponse },
};

export type post_ConfigUpdate = typeof post_ConfigUpdate;
export const post_ConfigUpdate = {
  method: S.Literal("POST"),
  path: S.Literal("/configs/{id}/update"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { query: S.Struct({ version: S.NumberFromString.pipe(S.int()) }).pipe(S.filter((data) => Object.keys(data).every((key) => ["version"].includes(key)))), path: S.Struct({ id: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["id"].includes(key)))), body: ConfigSpec },
  responses: { 200: S.Unknown, 400: S.Union(ErrorResponse, ErrorResponse), 404: S.Union(ErrorResponse, ErrorResponse), 500: S.Union(ErrorResponse, ErrorResponse), 503: S.Union(ErrorResponse, ErrorResponse) },
};

export type get_DistributionInspect = typeof get_DistributionInspect;
export const get_DistributionInspect = {
  method: S.Literal("GET"),
  path: S.Literal("/distribution/{name}/json"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: { path: S.Struct({ name: S.String }).pipe(S.filter((data) => Object.keys(data).every((key) => ["name"].includes(key)))) },
  responses: { 200: DistributionInspect, 401: ErrorResponse, 500: ErrorResponse },
};

export type post_Session = typeof post_Session;
export const post_Session = {
  method: S.Literal("POST"),
  path: S.Literal("/session"),
  requestFormat: S.Literal("json"),
  responseFormat: S.Literal("json"),
  parameters: S.Never,
  responses: { 101: S.Unknown, 400: S.Unknown, 500: S.Unknown },
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
"/distribution/{name}/json": get_DistributionInspect
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
"/session": post_Session
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
"/configs/{id}": delete_ConfigDelete
         },
put: {
           "/containers/{id}/archive": put_PutContainerArchive,
"/volumes/{name}": put_VolumeUpdate
         },
head: {
           "/containers/{id}/archive": head_ContainerArchiveInfo,
"/_ping": head_SystemPingHead
         }
     }
     export type EndpointByMethod = typeof EndpointByMethod;
     // </EndpointByMethod>
     

    // <EndpointByMethod.Shorthands>
    export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PutEndpoints = EndpointByMethod["put"]
export type HeadEndpoints = EndpointByMethod["head"]
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
export type Method = "get" | "head" | "options" | "trace" | MutationMethod;

export type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";
export type ResponseFormat = "json" | "sse";
export type SecurityRequirements = readonly (readonly string[])[];


    // <EndpointRequestFormats>
    /** Non-json request body encodings; missing entries default to `"json"`. */
    export const endpointRequestFormats = {
    post: {
          "/build": "binary",
"/images/create": "text",
"/images/load": "text",
"/plugins/create": "text"
        },
put: {
          "/containers/{id}/archive": "binary"
        }
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: RequestFormat }> }>;
    // </EndpointRequestFormats>
    

    // <EndpointParameterStyles>
    export type ParameterSerialization = { style: string; explode: boolean; allowReserved: boolean };
    export type EndpointParameterStyles = Partial<Record<"query" | "path" | "header" | "cookie", Record<string, ParameterSerialization>>>;
    /** OpenAPI parameter styles used by the built-in encoders. */
    export const endpointParameterStyles = {"get":{"/containers/json":{"query":{"all":{"style":"form","explode":true,"allowReserved":false},"limit":{"style":"form","explode":true,"allowReserved":false},"size":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/json":{"query":{"size":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/top":{"query":{"ps_args":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/logs":{"query":{"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"until":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/changes":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/export":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/stats":{"query":{"stream":{"style":"form","explode":true,"allowReserved":false},"one-shot":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/attach/ws":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false},"logs":{"style":"form","explode":true,"allowReserved":false},"stream":{"style":"form","explode":true,"allowReserved":false},"stdin":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/images/json":{"query":{"all":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false},"shared-size":{"style":"form","explode":true,"allowReserved":false},"digests":{"style":"form","explode":true,"allowReserved":false}}},"/images/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/history":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/search":{"query":{"term":{"style":"form","explode":true,"allowReserved":false},"limit":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/events":{"query":{"since":{"style":"form","explode":true,"allowReserved":false},"until":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/system/df":{"query":{"type":{"style":"form","explode":true,"allowReserved":false}}},"/images/{name}/get":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/get":{"query":{"names":{"style":"form","explode":false,"allowReserved":false}}},"/exec/{id}/json":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/volumes/{name}":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/networks":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/networks/{id}":{"query":{"verbose":{"style":"form","explode":true,"allowReserved":false},"scope":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/privileges":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/nodes/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false},"status":{"style":"form","explode":true,"allowReserved":false}}},"/services/{id}":{"query":{"insertDefaults":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}/logs":{"query":{"details":{"style":"form","explode":true,"allowReserved":false},"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/tasks":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/tasks/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/tasks/{id}/logs":{"query":{"details":{"style":"form","explode":true,"allowReserved":false},"follow":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false},"since":{"style":"form","explode":true,"allowReserved":false},"timestamps":{"style":"form","explode":true,"allowReserved":false},"tail":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/secrets/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/configs/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/distribution/{name}/json":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}}},"post":{"/containers/create":{"query":{"name":{"style":"form","explode":true,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/resize":{"query":{"h":{"style":"form","explode":true,"allowReserved":false},"w":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/start":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/stop":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/restart":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/kill":{"query":{"signal":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/update":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/rename":{"query":{"name":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/pause":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/unpause":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/attach":{"query":{"detachKeys":{"style":"form","explode":true,"allowReserved":false},"logs":{"style":"form","explode":true,"allowReserved":false},"stream":{"style":"form","explode":true,"allowReserved":false},"stdin":{"style":"form","explode":true,"allowReserved":false},"stdout":{"style":"form","explode":true,"allowReserved":false},"stderr":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/{id}/wait":{"query":{"condition":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/containers/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/build":{"query":{"dockerfile":{"style":"form","explode":true,"allowReserved":false},"t":{"style":"form","explode":true,"allowReserved":false},"extrahosts":{"style":"form","explode":true,"allowReserved":false},"remote":{"style":"form","explode":true,"allowReserved":false},"q":{"style":"form","explode":true,"allowReserved":false},"nocache":{"style":"form","explode":true,"allowReserved":false},"cachefrom":{"style":"form","explode":true,"allowReserved":false},"pull":{"style":"form","explode":true,"allowReserved":false},"rm":{"style":"form","explode":true,"allowReserved":false},"forcerm":{"style":"form","explode":true,"allowReserved":false},"memory":{"style":"form","explode":true,"allowReserved":false},"memswap":{"style":"form","explode":true,"allowReserved":false},"cpushares":{"style":"form","explode":true,"allowReserved":false},"cpusetcpus":{"style":"form","explode":true,"allowReserved":false},"cpuperiod":{"style":"form","explode":true,"allowReserved":false},"cpuquota":{"style":"form","explode":true,"allowReserved":false},"buildargs":{"style":"form","explode":true,"allowReserved":false},"shmsize":{"style":"form","explode":true,"allowReserved":false},"squash":{"style":"form","explode":true,"allowReserved":false},"labels":{"style":"form","explode":true,"allowReserved":false},"networkmode":{"style":"form","explode":true,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false},"target":{"style":"form","explode":true,"allowReserved":false},"outputs":{"style":"form","explode":true,"allowReserved":false}},"header":{"Content-type":{"style":"simple","explode":false,"allowReserved":false},"X-Registry-Config":{"style":"simple","explode":false,"allowReserved":false}}},"/build/prune":{"query":{"keep-storage":{"style":"form","explode":true,"allowReserved":false},"all":{"style":"form","explode":true,"allowReserved":false},"filters":{"style":"form","explode":true,"allowReserved":false}}},"/images/create":{"query":{"fromImage":{"style":"form","explode":true,"allowReserved":false},"fromSrc":{"style":"form","explode":true,"allowReserved":false},"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false},"message":{"style":"form","explode":true,"allowReserved":false},"changes":{"style":"form","explode":false,"allowReserved":false},"platform":{"style":"form","explode":true,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/push":{"query":{"tag":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}/tag":{"query":{"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/images/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/commit":{"query":{"container":{"style":"form","explode":true,"allowReserved":false},"repo":{"style":"form","explode":true,"allowReserved":false},"tag":{"style":"form","explode":true,"allowReserved":false},"comment":{"style":"form","explode":true,"allowReserved":false},"author":{"style":"form","explode":true,"allowReserved":false},"pause":{"style":"form","explode":true,"allowReserved":false},"changes":{"style":"form","explode":true,"allowReserved":false}}},"/images/load":{"query":{"quiet":{"style":"form","explode":true,"allowReserved":false}}},"/containers/{id}/exec":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/exec/{id}/start":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/exec/{id}/resize":{"query":{"h":{"style":"form","explode":true,"allowReserved":false},"w":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/networks/{id}/connect":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/{id}/disconnect":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/prune":{"query":{"filters":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/pull":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false},"name":{"style":"form","explode":true,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/enable":{"query":{"timeout":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/disable":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/upgrade":{"query":{"remote":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/create":{"query":{"name":{"style":"form","explode":true,"allowReserved":false}}},"/plugins/{name}/push":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}/set":{"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/swarm/leave":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}}},"/swarm/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false},"rotateWorkerToken":{"style":"form","explode":true,"allowReserved":false},"rotateManagerToken":{"style":"form","explode":true,"allowReserved":false},"rotateManagerUnlockKey":{"style":"form","explode":true,"allowReserved":false}}},"/services/create":{"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false},"registryAuthFrom":{"style":"form","explode":true,"allowReserved":false},"rollback":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}},"header":{"X-Registry-Auth":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs/{id}/update":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}},"delete":{"/containers/{id}":{"query":{"v":{"style":"form","explode":true,"allowReserved":false},"force":{"style":"form","explode":true,"allowReserved":false},"link":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/images/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false},"noprune":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/networks/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/plugins/{name}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}},"/nodes/{id}":{"query":{"force":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/services/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/secrets/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/configs/{id}":{"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}},"put":{"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false},"noOverwriteDirNonDir":{"style":"form","explode":true,"allowReserved":false},"copyUIDGID":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}},"/volumes/{name}":{"query":{"version":{"style":"form","explode":true,"allowReserved":false}},"path":{"name":{"style":"simple","explode":false,"allowReserved":false}}}},"head":{"/containers/{id}/archive":{"query":{"path":{"style":"form","explode":true,"allowReserved":false}},"path":{"id":{"style":"simple","explode":false,"allowReserved":false}}}}} as Partial<Record<string, Partial<Record<string, EndpointParameterStyles>>>>;
    // </EndpointParameterStyles>
    

    // <EndpointResponseFormats>
    /** Non-json response body modes; missing entries default to `"json"`. SSE skips JSON parse + output validation. */
    export const endpointResponseFormats = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: ResponseFormat }> }>;
    // </EndpointResponseFormats>
    

    // <EndpointSecurityRequirements>
    /** OpenAPI security requirements applied when an endpoint has no explicit entry. */
    export const defaultSecurityRequirements = [] as SecurityRequirements;
    /** Endpoint-specific security requirements that differ from the default. */
    export const endpointSecurityRequirements = {
    
    } as Partial<{ [M in keyof EndpointByMethod]: Partial<{ [P in keyof EndpointByMethod[M]]: SecurityRequirements }> }>;
    // </EndpointSecurityRequirements>
    

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
  responseHeaders?: TConfig["responseHeaders"]
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
    decodePathParams?: (path: string, pathParams: unknown, styles?: Record<string, ParameterSerialization>) => string
  encodeSearchParams?: (searchParams: unknown, styles?: Record<string, ParameterSerialization>) => URLSearchParams | undefined
  /** Merge cookie params into request headers (default: Cookie header). */
  encodeCookies?: (cookies: unknown, headers: Headers) => void
    //
    fetch: (input: {
      method: Method;
      url: URL;
      urlSearchParams?: URLSearchParams | undefined;
      parameters?: EndpointParameters | undefined;
      path: string;
      /** How to encode `parameters.body` (from OpenAPI requestBody content type). */
      requestFormat: RequestFormat;
      /** OpenAPI parameter serialization metadata for the current endpoint. */
      parameterStyles?: EndpointParameterStyles;
      /** OpenAPI security requirements for this operation. Empty means no credentials are required. */
      security?: SecurityRequirements;
      overrides?: RequestInit;
      throwOnStatusError?: boolean
    }) => Promise<FetcherResponse>;
    parseResponseData?: (response: FetcherResponse) => Promise<unknown>
}

export const successStatusCodes = [200,201,202,203,204,205,206,207,208,226,300,301,302,303,304,305,306,307,308] as const;
export type SuccessStatusCode = typeof successStatusCodes[number];

export const errorStatusCodes = [400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,421,422,423,424,425,426,428,429,431,451,500,501,502,503,504,505,506,507,508,510,511] as const;
export type ErrorStatusCode = typeof errorStatusCodes[number];

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues = unknown> extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | string & {}> (name: Name, value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) => void
  forEach: (callbackfn: (value: TypedHeaderValues[keyof TypedHeaderValues] | string & {}, key: Extract<keyof TypedHeaderValues, string> | string & {}, parent: TypedHeaders<TypedHeaderValues>) => void, thisArg?: unknown) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: true;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TSuccess;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>;
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders> extends Omit<FetcherResponse, "ok" | "status" | "json" | "headers"> {
  ok: false;
  status: TStatusCode;
  headers: never extends THeaders ? FetcherResponse["headers"] : TypedHeaders<THeaders>;
  data: TData;
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>;
}

type StatusCodeFromKey<TKey> = TKey extends `${infer TStatusCode extends number}`
  ? TStatusCode
  : TKey extends number
    ? TKey
    : never;

export type TypedApiResponse<TAllResponses = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
    ? TStatusCode extends SuccessStatusCode
      ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
    : never;
}[keyof TAllResponses];

type OptionalUndefinedKeys<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
} & {
  [K in keyof T as undefined extends T[K] ? K : never]?: Exclude<T[K], undefined>;
};
export type InferSchemaValue<T> = T extends { Type: infer O } ? O : T extends (...args: never[]) => unknown ? T : T extends object ? { [K in keyof T]: InferSchemaValue<T[K]> } : T;
type InferSchemaInputRaw<T> = T extends { Encoded: infer I } ? I : T extends (...args: never[]) => unknown ? T : T extends object ? { [K in keyof T]: InferSchemaInputRaw<T[K]> } : T;
type InferSchemaInput<T> = OptionalUndefinedKeys<InferSchemaInputRaw<T>>;

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string | number, unknown>
    ? TypedApiResponse<InferSchemaValue<TResponses>, TEndpoint extends { responseHeaders: infer THeaders } ? InferSchemaValue<THeaders> : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<SafeApiResponse<TEndpoint>, { status: TStatusCode }>

/**
 * Success-body payload — InferSchemaValue only on success statuses.
 * Filter with extends {} like the old Extract { data: {} } so unknown bodies (e.g. 304) drop out.
 */
export type InferSuccessData<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? {
      [K in keyof TResponses]: StatusCodeFromKey<K> extends infer TStatusCode extends number
        ? TStatusCode extends SuccessStatusCode
          ? Extract<InferSchemaValue<TResponses[K]>, {}>
          : never
        : never;
    }[keyof TResponses]
  : never;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];
type NotNever<T> = [T] extends [never] ? false : true;

export type ApiQueryOptions = {
  /** Override whether a generated TanStack Query consumes TanStack Query's AbortSignal. */
  consumeQuerySignal?: boolean;
};

/** Call options merged onto inferred endpoint parameters. */
type ApiRequestOptions = {
  overrides?: RequestInit;
  queryOptions?: ApiQueryOptions;
  withResponse?: boolean;
  throwOnStatusError?: boolean;
  validate?: ValidateSide;
};

/** Parameter bag for an endpoint + request options. */
export type ApiCallParams<TEndpoint> = TEndpoint extends { parameters: infer UParams }
  ? NotNever<InferSchemaInput<UParams>> extends true
    ? InferSchemaInput<UParams> & ApiRequestOptions
    : ApiRequestOptions
  : ApiRequestOptions;

/** Resolve response type from withResponse flag on the call config. */
export type ApiCallResult<TEndpoint, TParams> = TParams extends { withResponse: true }
  ? SafeApiResponse<TEndpoint>
  : InferSuccessData<TEndpoint>;

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
    this.name = 'TypedStatusError';
    this.response = response;
    this.status = response.status;
  }
}
// </TypedStatusError>






import { Effect } from "effect";

// <HttpClientError>
export class HttpClientError extends Error {
  readonly _tag = "HttpClientError";
  constructor(message: string, readonly cause?: unknown) {
    super(message);
    this.name = "HttpClientError";
  }
}
// </HttpClientError>


// <ValidateHelpers>
const defaultParse = (schema: unknown, value: unknown): unknown => {
  return S.decodeUnknownSync(schema as S.Schema<unknown, unknown, never>)(value);
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
  decodePathParams?: (path: string, pathParams: unknown, styles?: Record<string, ParameterSerialization>) => string;
  encodeSearchParams?: (searchParams: unknown, styles?: Record<string, ParameterSerialization>) => URLSearchParams | undefined;
  encodeCookies?: (cookies: unknown, headers: Headers) => void;
  parseResponseData?: (response: FetcherResponse) => Promise<unknown>;
  fetch: (input: Parameters<Fetcher["fetch"]>[0]) => Effect.Effect<FetcherResponse, HttpClientError, never>;
};

const wrapPromiseFetcher = (fetcher: Fetcher): EffectFetcher => ({
  ...(fetcher.decodePathParams ? { decodePathParams: fetcher.decodePathParams } : {}),
  ...(fetcher.encodeSearchParams ? { encodeSearchParams: fetcher.encodeSearchParams } : {}),
  ...(fetcher.encodeCookies ? { encodeCookies: fetcher.encodeCookies } : {}),
  ...(fetcher.parseResponseData ? { parseResponseData: fetcher.parseResponseData } : {}),
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
    TParams extends ApiCallParams<TEndpoint> = ApiCallParams<TEndpoint>
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<TParams>
  ): Effect.Effect<
    ApiCallResult<TEndpoint, TParams>,
    TypedStatusError | HttpClientError,
    never
  >;

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath]
  >(
    method: TMethod,
    path: TPath,
    ...params: [config?: unknown]
  ): Effect.Effect<
    SafeApiResponse<TEndpoint> | InferSuccessData<TEndpoint>,
    TypedStatusError | HttpClientError,
    never
  > {
    const self = this;
    return Effect.gen(function* () {
      // Implementation reads a loose param bag; call sites stay typed via MaybeOptionalArg<>.
      const requestParams = params[0] as
        | (EndpointParameters & {
            overrides?: RequestInit;
            queryOptions?: ApiQueryOptions;
            validate?: ValidateSide;
            withResponse?: boolean;
            throwOnStatusError?: boolean;
          })
        | undefined;
      const withResponse = Boolean(requestParams?.withResponse);
      const throwOnStatusError = requestParams?.throwOnStatusError ?? (withResponse ? false : true);
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
            const onValidate = self.onValidate;
            parametersToSend[key] = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "input",
                  method: String(method),
                  path: String(path),
                  schema: schema,
                  value: value,
                  onValidate,
                }),
              catch: (cause) => new HttpClientError("validation failed", cause),
            });
          } else {
            parametersToSend[key] = yield* Effect.try({
              try: () => S.decodeUnknownSync(schema as S.Schema<unknown, unknown, never>)(value),
              catch: (cause) => new HttpClientError("decode failed", cause),
            });
          }
          }
        }
      }

      const decodePath =
        self.effectFetcher.decodePathParams ??
        ((url: string, p: unknown, styles?: Record<string, ParameterSerialization>) => {
          const record = (p ?? {}) as Record<string, unknown>;
          const encode = (value: unknown) => encodeURIComponent(String(value));
          const serialize = (key: string, value: unknown): string => {
            const parameterStyle = styles?.[key];
            const style = parameterStyle?.style ?? "simple";
            const explode = parameterStyle?.explode ?? false;
            if (style === "label") {
              if (Array.isArray(value)) return "." + value.filter((item) => item != null).map(encode).join(explode ? "." : ",");
              if (value && typeof value === "object") {
                const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
                return "." + (explode ? entries.map(([name, item]) => encode(name) + "=" + encode(item)).join(".") : entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(","));
              }
              return "." + encode(value);
            }
            if (style === "matrix") {
              if (Array.isArray(value)) return explode ? value.filter((item) => item != null).map((item) => ";" + key + "=" + encode(item)).join("") : ";" + key + "=" + value.filter((item) => item != null).map(encode).join(",");
              if (value && typeof value === "object") {
                const entries = Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null);
                return explode ? entries.map(([name, item]) => ";" + encode(name) + "=" + encode(item)).join("") : ";" + key + "=" + entries.flatMap(([name, item]) => [encode(name), encode(item)]).join(",");
              }
              return ";" + key + "=" + encode(value);
            }
            if (Array.isArray(value)) return value.filter((item) => item != null).map(encode).join(",");
            if (value && typeof value === "object") return Object.entries(value as Record<string, unknown>).filter(([, item]) => item != null).map(([name, item]) => explode ? encode(name) + "=" + encode(item) : [encode(name), encode(item)]).flat().join(",");
            return encode(value);
          };
          return url
            .replace(/{([^}]+)}/g, (_, key: string) =>
              record[key] != null ? serialize(key, record[key]) : `{${key}}`,
            )
            .replace(/:([a-zA-Z0-9_]+)/g, (_, key: string) =>
              record[key] != null ? serialize(key, record[key]) : `:${key}`,
            );
        });
      const encodeSearch =
        self.effectFetcher.encodeSearchParams ??
        ((queryParams: unknown, styles?: Record<string, ParameterSerialization>) => {
          if (!queryParams || typeof queryParams !== "object") return undefined;
          const searchParams = new URLSearchParams();
          const rawEntries: Array<{ key: string; value: string; allowReserved: boolean }> = [];
          const append = (key: string, value: unknown, allowReserved = false) => {
            const stringValue = String(value);
            searchParams.append(key, stringValue);
            rawEntries.push({ key, value: stringValue, allowReserved });
          };
          const encodeQueryComponent = (value: string, allowReserved: boolean) => {
            const encoded = encodeURIComponent(value);
            return allowReserved
              ? encoded.replace(/%3A|%2F|%3F|%40|%21|%24|%26|%27|%28|%29|%2A|%2B|%2C|%3B|%3D|%5B|%5D/gi, (part) => decodeURIComponent(part))
              : encoded;
          };
          Object.defineProperty(searchParams, "toString", {
            value: () => rawEntries.map(({ key, value, allowReserved }) => `${encodeQueryComponent(key, false)}=${encodeQueryComponent(value, allowReserved)}`).join("&"),
          });
          Object.entries(queryParams as Record<string, unknown>).forEach(([key, value]) => {
            if (value != null) {
              const parameterStyle = styles?.[key];
              const style = parameterStyle?.style ?? "form";
              const explode = parameterStyle?.explode ?? true;
              const allowReserved = parameterStyle?.allowReserved === true;
              if (Array.isArray(value)) {
                if (style === "spaceDelimited") append(key, value.filter((item) => item != null).map(String).join(" "), allowReserved);
                else if (style === "pipeDelimited") append(key, value.filter((item) => item != null).map(String).join("|"), allowReserved);
                else if (explode) value.forEach((val) => val != null && append(key, val, allowReserved));
                else append(key, value.filter((item) => item != null).map(String).join(","), allowReserved);
              } else if (typeof value === "object") {
                const entries = Object.entries(value as Record<string, unknown>).filter(([, nestedValue]) => nestedValue != null);
                if (style === "deepObject") {
                  for (const [nestedKey, nestedValue] of entries) {
                    if (Array.isArray(nestedValue)) nestedValue.forEach((item) => item != null && append(`${key}[${nestedKey}]`, item, allowReserved));
                    else append(`${key}[${nestedKey}]`, nestedValue, allowReserved);
                  }
                } else if (explode) {
                  for (const [nestedKey, nestedValue] of entries) {
                    if (Array.isArray(nestedValue)) nestedValue.forEach((item) => item != null && append(nestedKey, item, allowReserved));
                    else append(nestedKey, nestedValue, allowReserved);
                  }
                } else {
                  append(key, entries.flatMap(([nestedKey, nestedValue]) => [nestedKey, ...(Array.isArray(nestedValue) ? nestedValue : [nestedValue])]).map(String).join(","), allowReserved);
                }
              } else append(key, value, allowReserved);
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
          const normalizedContentType = contentType.toLowerCase();
          if (normalizedContentType.includes("text/event-stream")) {
            return response.body ?? null;
          }
          if (normalizedContentType.startsWith("application/octet-stream")) {
            return new Blob([await response.arrayBuffer()]);
          }
          if (normalizedContentType.includes("json") || normalizedContentType === "*/*") {
            try {
              return await response.json();
            } catch {
              return undefined;
            }
          }
          if (normalizedContentType.startsWith("text/")) return response.text();
          return undefined;
        });

      const resolvedPath = decodePath(
        self.baseUrl + (path as string),
        parametersToSend.path ?? {},
        endpointParameterStyles[method]?.[path]?.path,
      );
      const url = new URL(resolvedPath);
      const urlSearchParams = encodeSearch(parametersToSend.query, endpointParameterStyles[method]?.[path]?.query);

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
        ...(urlSearchParams ? { urlSearchParams } : {}),
        ...(Object.keys(parametersToSend).length ? { parameters: parametersToSend } : {}),
        requestFormat: endpointRequestFormats[method]?.[path] ?? "json",
        ...(endpointParameterStyles[method]?.[path as string]
          ? { parameterStyles: endpointParameterStyles[method]?.[path as string] }
          : {}),
        security: endpointSecurityRequirements[method]?.[path] ?? defaultSecurityRequirements,
        ...(overrides ? { overrides } : {}),
      });

      const responseFormat = endpointResponseFormats[method]?.[path] ?? "json";
      let data =
        responseFormat === "sse"
          ? (response.body ?? null)
          : yield* Effect.tryPromise({
              try: () => parseData(response),
              catch: (cause) => new HttpClientError("parse failed", cause),
            });

      if (responseFormat !== "sse" && (validateSide === "output" || validateSide === "both") && (response.ok || !(errorStatusCodes as readonly number[]).includes(response.status)) && endpointSchema?.responses) {
        const responseSchema =
          endpointSchema.responses[String(response.status)] ??
          endpointSchema.responses[String(Math.floor(response.status / 100)) + "xx"] ??
          endpointSchema.responses[String(Math.floor(response.status / 100)) + "XX"] ??
          endpointSchema.responses["default"];
        if (responseSchema) {

          if (self.onValidate) {
            const onValidate = self.onValidate;
            data = yield* Effect.tryPromise({
              try: () =>
                runValidate({
                  side: "output",
                  method: String(method),
                  path: String(path),
                  schema: responseSchema,
                  value: data,
                  onValidate,
                }),
              catch: (cause) => new HttpClientError("validation failed", cause),
            });
          } else {
            data = yield* Effect.try({
              try: () => S.decodeUnknownSync(responseSchema as S.Schema<unknown, unknown, never>)(data),
              catch: (cause) => new HttpClientError("decode failed", cause),
            });
          }
        }
      }

      const typedResponse = Object.assign(response, {
        data,
        json: () => Promise.resolve(data),
      });

      if ((errorStatusCodes as readonly number[]).includes(response.status)) {
        if (throwOnStatusError) {
          return yield* Effect.fail(
            new TypedStatusError(typedResponse as TypedErrorResponse<unknown, ErrorStatusCode, unknown>),
          );
        }
        return (withResponse ? typedResponse : data) as SafeApiResponse<TEndpoint> | InferSuccessData<TEndpoint>;
      }

      return (withResponse ? typedResponse : data) as SafeApiResponse<TEndpoint> | InferSuccessData<TEndpoint>;
    });
  }

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path], TParams extends ApiCallParams<TEndpoint> = ApiCallParams<TEndpoint>>(
    path: Path,
    ...params: MaybeOptionalArg<TParams>
  ): Effect.Effect<
    ApiCallResult<TEndpoint, TParams>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"get", Path, GetEndpoints[Path], TParams>("get", path, params[0] as never);
  }
post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path], TParams extends ApiCallParams<TEndpoint> = ApiCallParams<TEndpoint>>(
    path: Path,
    ...params: MaybeOptionalArg<TParams>
  ): Effect.Effect<
    ApiCallResult<TEndpoint, TParams>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"post", Path, PostEndpoints[Path], TParams>("post", path, params[0] as never);
  }
delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path], TParams extends ApiCallParams<TEndpoint> = ApiCallParams<TEndpoint>>(
    path: Path,
    ...params: MaybeOptionalArg<TParams>
  ): Effect.Effect<
    ApiCallResult<TEndpoint, TParams>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"delete", Path, DeleteEndpoints[Path], TParams>("delete", path, params[0] as never);
  }
put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path], TParams extends ApiCallParams<TEndpoint> = ApiCallParams<TEndpoint>>(
    path: Path,
    ...params: MaybeOptionalArg<TParams>
  ): Effect.Effect<
    ApiCallResult<TEndpoint, TParams>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"put", Path, PutEndpoints[Path], TParams>("put", path, params[0] as never);
  }
head<Path extends keyof HeadEndpoints, TEndpoint extends HeadEndpoints[Path], TParams extends ApiCallParams<TEndpoint> = ApiCallParams<TEndpoint>>(
    path: Path,
    ...params: MaybeOptionalArg<TParams>
  ): Effect.Effect<
    ApiCallResult<TEndpoint, TParams>,
    TypedStatusError | HttpClientError,
    never
  > {
    return this.request<"head", Path, HeadEndpoints[Path], TParams>("head", path, params[0] as never);
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

  